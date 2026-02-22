import React from "react";
import { Button } from "../../design";
import { Type, TypeProps, Value } from "./InputElement";
/**
 * Form schema
 */
export declare type FormTemplate = Record<string, Type>;
/**
 * Generate value object from form schema
 */
export declare type MapFormToValues<T extends FormTemplate> = {
    [Property in keyof T]: Value<T[Property]>;
};
/**
 * Generate data object from form schema
 */
declare type MapFormToData<T extends FormTemplate> = {
    [Property in keyof T]: TypeProps<T[Property]>;
};
/**
 * Form props
 */
export interface Props<T extends FormTemplate> {
    /**
     * Form schema
     */
    schema: T;
    /**
     * Props required for rendering form elements
     */
    data: MapFormToData<T>;
    /**
     * Handle changes to the data
     */
    onChange?: (data: MapFormToValues<T>, key: keyof T) => void;
    /**
     * Handle form submission
     */
    onSubmit?: (data: MapFormToValues<T>) => void;
    /**
     * Provide an observable object of values
     */
    observed?: MapFormToValues<T>;
    /**
     * Provide default values for keys
     */
    defaults?: Partial<MapFormToValues<T>>;
    /**
     * Submit button properties
     */
    submitBtn?: Omit<React.ComponentProps<typeof Button>, "type">;
    /**
     * Whether all elements are disabled
     */
    disabled?: boolean;
    /**
     * Custom form layout
     */
    children?: React.ReactNode;
}
/**
 * Get initial values to use for the form data
 * @param schema Schema to use
 * @param defaults Defaults to apply
 * @returns Initial values
 */
export declare function getInitialValues<T extends FormTemplate>(schema: T, defaults?: Partial<MapFormToValues<T>>): MapFormToValues<T>;
/**
 * Form element
 */
export declare function FormElement({ id }: {
    id: string;
}): JSX.Element;
/**
 * Dynamic Form component
 */
export declare function Form<T extends FormTemplate>({ schema, data, disabled, onChange, onSubmit, observed, defaults, submitBtn, children, }: Props<T>): JSX.Element;
export {};
/**
 * Example on using <Form />:
    function test() {
        return (
            <Form
                schema={{
                    test: "checkbox",
                }}
                data={{
                    test: {
                        title: "this is my checkbox",
                        description: "oh yeah",
                    },
                }}
                onChange={(v, key) => {
                    if (key === "test") {
                        console.log("test changed!");
                    }
                }}
                onSubmit={(v) => {
                    v.test;
                }}
            />
        );
    }
*/
