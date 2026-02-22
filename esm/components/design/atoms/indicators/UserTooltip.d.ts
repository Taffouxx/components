import { User } from "revolt.js";
import { TooltipProps } from "./Tooltip";
declare type Props = Omit<TooltipProps, "content"> & {
    /**
     * User to display
     */
    user: User;
};
/**
 * User tooltip component
 */
export declare function UserTooltip({ user, ...props }: Props): JSX.Element;
export {};
