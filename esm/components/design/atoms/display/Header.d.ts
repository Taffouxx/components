export interface Props {
    readonly palette: "primary" | "secondary";
    readonly topBorder?: boolean;
    readonly bottomBorder?: boolean;
    readonly withBackground?: boolean;
    readonly withTransparency?: boolean;
}
export declare const Header: import("styled-components").StyledComponent<"div", any, Props, never>;
