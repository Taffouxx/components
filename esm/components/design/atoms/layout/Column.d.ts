interface Props {
    /**
     * Gap between child elements.
     */
    gap?: string;
    /**
     * This column is a group of elements and should be visually distinct.
     */
    group?: boolean | string;
    /**
     * The contents of this column be vertically centred.
     */
    centred?: boolean;
    /**
     * This column should grow to fit parent container.
     */
    grow?: boolean;
}
/**
 * Generic Flex Column
 */
export declare const Column: import("styled-components").StyledComponent<"div", any, Props, never>;
export {};
