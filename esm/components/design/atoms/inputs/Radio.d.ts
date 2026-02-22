import React from "react";
interface Props {
    title?: React.ReactNode;
    description?: React.ReactNode;
    disabled?: boolean;
    value?: boolean;
    onSelect?: () => void;
}
export declare function Radio({ title, description, value, onSelect, disabled, }: Props): JSX.Element;
export {};
