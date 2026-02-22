import React from "react";
import { EmojiInfo } from "./Picker";
interface Props {
    /**
     * Active emoji information
     */
    active: {
        emoji: EmojiInfo | null;
    };
    /**
     * Emoji component
     */
    renderEmoji: React.FC<{
        emoji: string;
    }>;
}
export declare const EmojiPreview: (({ active, renderEmoji }: Props) => JSX.Element | null) & {
    displayName: string;
};
export {};
