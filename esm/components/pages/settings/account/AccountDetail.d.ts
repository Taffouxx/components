import { User } from "revolt.js";
export interface Props {
    /**
     * User object
     */
    user: User;
}
/**
 * Account information header component
 */
export declare const AccountDetail: (({ user }: Props) => JSX.Element) & {
    displayName: string;
};
