import React from "react";
import type { Client } from "revolt.js";
export declare const mockClient: () => Client;
export declare const InjectMockClient: ({ children, }: {
    children: React.FC<{
        client: Client;
    }>;
}) => JSX.Element;
export declare const MaskDecorator: (Story: React.FC) => JSX.Element;
export declare const ContextDecorator: (Story: React.FC) => JSX.Element;
