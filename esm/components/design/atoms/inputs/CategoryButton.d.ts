import React from "react";
interface BaseProps {
    readonly account?: boolean;
    readonly disabled?: boolean;
    readonly largeDescription?: boolean;
}
export interface Props extends BaseProps {
    readonly icon?: React.ReactNode;
    readonly children?: React.ReactNode;
    readonly description?: React.ReactNode;
    readonly onClick?: () => void;
    readonly action?: "chevron" | "external" | React.ReactNode;
}
export declare function CategoryButton({ icon, children, description, account, disabled, onClick, action, }: Props): JSX.Element;
export {};
