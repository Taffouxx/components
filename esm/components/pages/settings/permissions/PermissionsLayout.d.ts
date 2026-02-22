import React from "react";
import { Props as RoleListProps } from "./RoleList";
export declare type Props = Omit<RoleListProps, "server" | "showDefault" | "selected" | "onSelect"> & {
    editor: React.FC<{
        selected: string;
    }>;
    server?: RoleListProps["server"];
    channel?: {
        server?: RoleListProps["server"];
    };
};
/**
 * Component to add a role list sidebar to a role editor
 */
export declare function PermissionsLayout({ channel, server: givenServer, editor: Editor, ...listProps }: Props): JSX.Element;
