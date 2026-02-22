import React from "react";
import { Checkbox, ColourSwatches, ComboBox, InputBox, Radio, TextArea } from "../../design";
/**
 * Available input types
 */
export declare type Type = "text" | "checkbox" | "colour" | "combo" | "radio" | "textarea" | "custom";
/**
 * Get default value
 */
export declare function emptyValue(type: Type): false | "" | undefined;
/**
 * Component props
 */
declare type Props<T extends Type> = {
    type: T;
    value: Value<T> | (() => Value<T>);
    onChange: (v: Value<T>) => void;
    disabled?: boolean;
} & TypeProps<T>;
/**
 * Multi or single-select choice entry
 */
declare type Choice = {
    value: string;
    name: React.ReactChild;
};
/**
 * Metadata for different input types
 */
declare type Metadata = {
    text: {
        value: string;
        props: React.ComponentProps<typeof InputBox>;
    };
    checkbox: {
        value: boolean;
        props: React.ComponentProps<typeof Checkbox>;
    };
    colour: {
        value: string;
        props: React.ComponentProps<typeof ColourSwatches>;
    };
    combo: {
        value: string;
        props: Omit<React.ComponentProps<typeof ComboBox>, "children"> & {
            options: Choice[];
        };
    };
    radio: {
        value: string;
        props: {
            choices: (Choice & Omit<React.ComponentProps<typeof Radio>, "title" | "value">)[];
        };
    };
    textarea: {
        value: string;
        props: React.ComponentProps<typeof TextArea>;
    };
    custom: {
        value: never;
        props: {
            element: JSX.Element;
        };
    };
};
/**
 * Actual input value type
 */
export declare type Value<T extends Type> = Metadata[T]["value"];
/**
 * Additional component props for given input type
 */
export declare type TypeProps<T extends Type> = Omit<Metadata[T]["props"], "value" | "onChange"> & {
    field?: React.ReactChild;
};
/**
 * Generic input element
 */
export declare function InputElement<T extends Type>({ type, value, onChange, ...props }: Props<T>): JSX.Element | null;
/**
 * Generic input element wrapped in MobX observer
 */
export declare const ObservedInputElement: typeof InputElement & {
    displayName: string;
};
export {};
