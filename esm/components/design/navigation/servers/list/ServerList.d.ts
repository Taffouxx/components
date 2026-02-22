import type { Client, Server } from "revolt.js";
import type { INotificationChecker } from "revolt.js/dist/util/Unreads";
import { FooterProps } from "./ListFooter";
export declare type Props = {
    /**
     * Client handle
     */
    client: Client;
    /**
     * Function to generate home URL
     */
    home: () => string;
    /**
     * Check whether a channel or server is muted
     */
    permit: INotificationChecker;
    /**
     * Active server ID
     */
    active?: string;
    /**
     * Whether to show discovery icon
     */
    showDiscovery?: boolean;
};
declare type ParentProps = {
    /**
     * Server ordering
     */
    servers: Server[];
    /**
     * Reordering function
     */
    reorder: (source: number, dest: number) => void;
};
/**
 * Server List
 */
export declare function ServerList(props: Props & ParentProps & FooterProps): JSX.Element;
export {};
