import React from "react";
interface Props {
    readonly palette?: "primary" | "success" | "warning" | "error";
    readonly children: React.ReactNode;
}
export declare const TipBase: import("styled-components").StyledComponent<"div", any, Omit<Props, "children">, never>;
export declare function Tip(props: Props): JSX.Element;
export {};
