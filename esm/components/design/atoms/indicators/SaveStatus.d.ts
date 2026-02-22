export declare type EditStatus = "saved" | "editing" | "saving";
interface Props {
    status: EditStatus;
}
export declare function SaveStatus({ status }: Props): JSX.Element;
export {};
