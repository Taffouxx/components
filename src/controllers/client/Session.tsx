import { action, computed, makeAutoObservable } from "mobx";
import { API, Client } from "revolt.js";

import { state } from "../../mobx/State";

import { resetMemberSidebarFetched } from "../../components/navigation/right/MemberSidebar";
import { modalController } from "../modals/ModalController";

/**
 * Current lifecycle state
 */
type State = "Ready" | "Connecting" | "Online" | "Disconnected" | "Offline";

/**
 * Possible transitions between states
 */
type Transition =
    | {
          action: "LOGIN";
          apiUrl?: string;
          session: SessionPrivate;
          configuration?: API.RevoltConfig;

          knowledge: "new" | "existing";
      }
    | {
          action:
              | "SUCCESS"
              | "DISCONNECT"
              | "RETRY"
              | "LOGOUT"
              | "ONLINE"
              | "OFFLINE";
      };

/**
 * Client lifecycle finite state machine
 */
export default class Session {
    state: State = window.navigator.onLine ? "Ready" : "Offline";
    user_id: string | null = null;
    client: Client | null = null;

    /**
     * Create a new Session
     */
    constructor() {
        makeAutoObservable(this);

        this.onDropped = this.onDropped.bind(this);
        this.onReady = this.onReady.bind(this);
        this.onOnline = this.onOnline.bind(this);
        this.onOffline = this.onOffline.bind(this);

        window.addEventListener("online", this.onOnline);
        window.addEventListener("offline", this.onOffline);
    }

    /**
     * Initiate logout and destroy client
     */
    @action destroy() {
        if (this.client) {
            this.state = "Ready";
            this.destroyClient();
        }
    }

    /**
     * Called when user's browser signals it is online
     */
    private onOnline() {
        this.emit({
            action: "ONLINE",
        });
    }

    /**
     * Called when user's browser signals it is offline
     */
    private onOffline() {
        this.emit({
            action: "OFFLINE",
        });
    }

    /**
     * Called when the client signals it has disconnected
     */
    private onDropped() {
        this.emit({
            action: "DISCONNECT",
        });
    }

    /**
     * Called when the client signals it has received the Ready packet
     */
    private onReady() {
        resetMemberSidebarFetched();
        this.emit({
            action: "SUCCESS",
        });
    }

    /**
     * Called when the client emits an error
     */
    private onError(err: any) {
        console.log("Client error:", err);
        
        // Handle invalid session error
        if (err?.data?.type === "InvalidSession") {
            console.log("Invalid session detected, removing session and transitioning to Ready");
            this.state = "Ready";
            
            // Remove current session if we can identify it
            if (this.user_id) {
                state.auth.removeSession(this.user_id);
                this.user_id = null;
            }
            
            // Destroy and recreate client
            this.destroyClient();
        }
        
        // Handle WebSocket connection errors
        if (err?.type === "error" && err?.target?.url?.includes("events.stoat.chat")) {
            console.log("WebSocket connection failed to:", err.target?.url);
            console.log("WebSocket readyState:", err.target?.readyState);
            console.log("This may indicate an invalid token or network issue");
        }
    }

    /**
     * Create a new Revolt.js Client for this Session
     * @param apiUrl Optionally specify an API URL
     */
    private createClient(apiUrl?: string) {
        this.client = new Client({
            baseURL: apiUrl ?? import.meta.env.VITE_API_URL,
            autoReconnect: false,
        });

        this.client.addListener("dropped", this.onDropped);
        this.client.addListener("ready", this.onReady);
        this.client.addListener("error", this.onError);
    }

    /**
     * Destroy the client including any listeners.
     */
    private destroyClient() {
        if (this.client) {
            this.client!.removeAllListeners();
            this.user_id = null;
            this.client = null;
        }
    }

    /**
     * Ensure we are in one of the given states
     * @param state Possible states
     */
    private assert(...state: State[]) {
        let found = false;
        for (const target of state) {
            if (this.state === target) {
                found = true;
                break;
            }
        }

        if (!found) {
            throw `State must be ${state} in order to transition! (currently ${this.state})`;
        }
    }

    /**
     * Continue logging in provided onboarding is successful
     * @param data Transition Data
     */
    private async continueLogin(data: Transition & { action: "LOGIN" }) {
        try {
            await this.client!.useExistingSession(data.session as any);
            this.client!.connect();
            
            // Wait for user to be loaded
            if (this.client!.user) {
                this.user_id = this.client!.user.id;
            } else {
                // Wait for user to be available
                this.client!.once("ready", () => {
                    this.user_id = this.client!.user!.id;
                });
            }
            
            state.auth.setSession(data.session as any);
        } catch (err: any) {
            this.state = "Ready";
            
            // Handle invalid session error
            if (err?.data?.type === "InvalidSession") {
                console.log("Invalid session, removing and requiring re-authentication");
                // Remove the invalid session from auth store
                const session = data.session as any;
                if (session.user_id) {
                    state.auth.removeSession(session.user_id);
                }
                return;
            }
            
            throw err;
        }
    }

    /**
     * Transition to a new state by a certain action
     * @param data Transition Data
     */
    @action async emit(data: Transition) {
        console.info(`[FSM ${this.user_id ?? "Anonymous"}]`, data);

        switch (data.action) {
            // Login with session
            case "LOGIN": {
                this.assert("Ready");
                this.state = "Connecting";
                this.createClient(data.apiUrl);

                if (data.configuration) {
                    this.client!.configuration = data.configuration;
                }

                if (data.knowledge === "new") {
                    const config = await this.client!.api.get("/");
                    this.client!.configuration = config;
                    this.client!.useExistingSession(data.session as any);

                    const { onboarding } = await this.client!.api.get(
                        "/onboard/hello",
                    );

                    if (onboarding) {
                        modalController.push({
                            type: "onboarding",
                            callback: async (username: string) => {
                                // TODO: Implement onboarding completion
                                console.log("Onboarding completed for username:", username);
                                this.continueLogin(data);
                            },
                        });

                        return;
                    }
                }

                await this.continueLogin(data);

                break;
            }
            // Ready successfully received
            case "SUCCESS": {
                this.assert("Connecting");
                this.state = "Online";
                break;
            }
            // Client got disconnected
            case "DISCONNECT": {
                if (navigator.onLine) {
                    this.assert("Online");
                    this.state = "Disconnected";

                    setTimeout(() => {
                        // Check we are still disconnected before retrying.
                        if (this.state === "Disconnected") {
                            this.emit({
                                action: "RETRY",
                            });
                        }
                    }, 1000);
                }

                break;
            }
            // We should try reconnecting
            case "RETRY": {
                this.assert("Disconnected");
                this.state = "Connecting";
                break;
            }
            // User instructed logout
            case "LOGOUT": {
                this.assert("Connecting", "Online", "Disconnected");
                this.state = "Ready";
                this.destroyClient();
                break;
            }
            // Browser went offline
            case "OFFLINE": {
                this.state = "Offline";
                break;
            }
            // Browser went online
            case "ONLINE": {
                this.assert("Offline");
                if (this.client) {
                    this.state = "Disconnected";
                    this.emit({
                        action: "RETRY",
                    });
                } else {
                    this.state = "Ready";
                }
                break;
            }
        }
    }

    /**
     * Whether we are ready to render.
     * @returns Boolean
     */
    @computed get ready() {
        return !!this.client?.user;
    }
}
