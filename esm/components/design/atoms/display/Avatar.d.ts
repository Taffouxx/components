import { ReactNode } from "react";
export declare type Props = {
    /**
     * Avatar size
     */
    size?: number;
    /**
     * Image source
     */
    src?: string;
    /**
     * Fallback if no source
     */
    fallback?: string | ReactNode;
    /**
     * Punch a hole through the avatar
     */
    holepunch?: "bottom-right" | "top-right" | "right" | "none" | false;
    /**
     * Specify overlay component
     */
    overlay?: ReactNode;
    /**
     * Whether this icon is interactive
     */
    interactive?: boolean;
};
/**
 * Generic Avatar component
 *
 * Partially inspired by Adw.Avatar API, we allow users to specify a fallback component (usually just text) to display in case the URL is invalid.
 */
export declare function Avatar({ size, holepunch, fallback, src, overlay, interactive, }: Props): JSX.Element;
