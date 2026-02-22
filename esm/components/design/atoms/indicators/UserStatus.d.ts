import type { User } from "revolt.js";
export declare type Props = {
    /**
     * User we are dealing with
     */
    user?: User;
};
/**
 * Overlays user status in current SVG
 */
export declare const UserStatus: (({ user }: Props) => JSX.Element) & {
    displayName: string;
};
