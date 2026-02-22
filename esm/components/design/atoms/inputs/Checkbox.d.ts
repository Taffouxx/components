import React, { HTMLAttributes } from "react";
export declare type Props = {
    readonly disabled?: boolean;
    readonly title?: React.ReactNode;
    readonly description?: React.ReactNode;
    readonly value: boolean;
    readonly onChange: (state: boolean) => void;
} & Omit<HTMLAttributes<HTMLLabelElement>, "value" | "children" | "onChange" | "title">;
export declare function Checkbox({ disabled, title, description, value, onChange, ...props }: Props): JSX.Element;
