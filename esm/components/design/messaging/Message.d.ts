import type { Message as MessageType } from "revolt.js";
export interface Props {
    /**
     * Message
     */
    message: MessageType;
    /**
     * Whether this component is the head
     */
    head?: boolean;
}
export declare const Message: (({ message, head }: Props) => JSX.Element) & {
    displayName: string;
};
