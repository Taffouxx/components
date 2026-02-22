declare type State = "Allow" | "Neutral" | "Deny";
export interface Props {
    state: State;
    disabled?: boolean;
    onChange: (state: State) => void;
}
export declare function OverrideSwitch({ state, disabled, onChange }: Props): JSX.Element;
export {};
