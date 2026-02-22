import { API } from "revolt.js";
export interface Props {
    /**
     * Server to show role list for
     */
    server: {
        roles: Exclude<API.Server["roles"], undefined> | null;
        orderedRoles: (API.Role & {
            id: string;
        })[];
    };
    /**
     * Whether to show the default role
     */
    showDefault?: boolean;
    /**
     * Currently selected role
     */
    selected: string;
    /**
     * Rank of user looking at the list
     */
    rank?: number;
    /**
     * Select a new role
     */
    onSelect: (value: string) => void;
    /**
     * Callback to create a new role
     */
    onCreateRole?: (callback: (role_id: string) => void) => void;
}
/**
 * Component displaying a list of roles on a server
 */
export declare const RoleList: (({ server, showDefault, selected, rank, onSelect, onCreateRole, }: Props) => JSX.Element) & {
    displayName: string;
};
