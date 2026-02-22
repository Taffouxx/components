interface Props {
    readonly presets?: string[][];
    readonly value: string;
    readonly onChange: (value: string) => void;
}
export declare function ColourSwatches({ value, onChange, presets }: Props): JSX.Element;
export {};
