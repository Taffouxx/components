import React from "react";
import { Button } from "../../design";
import { Action, Props as ModalProps } from "../../design/atoms/display/Modal";
import { FormTemplate, MapFormToValues, Props as FormProps } from "./Form";
/**
 * Modal Form props
 */
declare type Props<T extends FormTemplate> = Exclude<ModalProps, "children" | "actions" | "registerOnClose" | "registerOnConfirm"> & Omit<FormProps<T>, "observed" | "onChange" | "onSubmit"> & {
    /**
     * Form submission callback
     */
    callback: (values: MapFormToValues<T>) => Promise<void>;
    /**
     * Submit button properties
     */
    submit?: Omit<React.ComponentProps<typeof Button>, "type">;
    /**
     * Custom actions after submit button
     */
    actions?: Action[];
};
/**
 * Modal Form
 */
export declare function ModalForm<T extends FormTemplate>(props: Props<T>): JSX.Element;
export {};
