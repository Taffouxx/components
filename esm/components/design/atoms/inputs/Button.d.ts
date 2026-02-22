export interface Props {
    readonly compact?: boolean | "icon";
    readonly palette?: "primary" | "secondary" | "plain" | "plain-secondary" | "accent" | "success" | "warning" | "error";
}
export declare const Button: import("styled-components").StyledComponent<"button", any, Props, never>;
