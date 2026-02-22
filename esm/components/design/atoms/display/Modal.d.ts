import React from "react";
import { Props as ButtonProps } from "../inputs/Button";
export declare type Action = Omit<React.HTMLAttributes<HTMLButtonElement>, "as"> & Omit<ButtonProps, "onClick"> & {
    confirmation?: boolean;
    onClick: () => void | boolean | Promise<boolean>;
};
export interface Props {
    padding?: string;
    maxWidth?: string;
    maxHeight?: string;
    disabled?: boolean;
    transparent?: boolean;
    nonDismissable?: boolean;
    actions?: Action[];
    onClose?: (force: boolean) => void;
    signal?: "close" | "confirm" | "force";
    registerOnClose?: (fn: () => void) => () => void;
    registerOnConfirm?: (fn: () => void) => () => void;
    title?: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const Modal: (props: Props) => JSX.Element;
