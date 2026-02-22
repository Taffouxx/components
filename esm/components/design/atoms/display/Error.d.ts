import React from "react";
export interface Props {
    error?: React.ReactNode;
    children?: React.ReactNode;
}
export declare function Error({ error, children }: Props): JSX.Element;
