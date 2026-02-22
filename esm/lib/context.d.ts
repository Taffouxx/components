import React from "react";
export declare type ContextMenu = {
    id: "Menu";
    data?: {
        server?: string;
        channel?: string;
        unread?: boolean;
    };
} | {
    id: "Status";
};
export declare type Action = {
    type: "WriteClipboard";
    text: string;
};
export declare const UIProvider: React.Provider<{
    Link: React.FC<{
        to: string;
        replace?: boolean;
        children: React.ReactNode;
    }>;
    Text: React.FC<{
        id: string;
        children?: React.ReactNode;
    }>;
    Trigger: React.FC<ContextMenu & {
        children: React.ReactNode;
    }>;
    emitAction: (action: Action) => void;
}>;
export declare const useLink: () => React.FC<{
    to: string;
    replace?: boolean | undefined;
    children: React.ReactNode;
}>;
export declare const useText: () => React.FC<{
    id: string;
    children?: React.ReactNode;
}>;
export declare const useTrigger: () => React.FC<ContextMenu & {
    children: React.ReactNode;
}>;
export declare const useEmitter: () => (action: Action) => void;
export declare const useUI: () => {
    Link: React.FC<{
        to: string;
        replace?: boolean;
        children: React.ReactNode;
    }>;
    Text: React.FC<{
        id: string;
        children?: React.ReactNode;
    }>;
    Trigger: React.FC<ContextMenu & {
        children: React.ReactNode;
    }>;
    emitAction: (action: Action) => void;
};
