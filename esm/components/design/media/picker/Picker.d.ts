import React from "react";
/**
 * Category of emoji
 */
declare type Category = {
    id: string;
    name: string;
    emoji?: string;
    iconURL?: string;
};
/**
 * Emoji information
 */
export declare type EmojiInfo = {
    id: string;
    name?: string;
};
interface Props {
    /**
     * All available emojis
     */
    emojis: Record<string | "default", EmojiInfo[]>;
    /**
     * Ordered list of categories
     */
    categories: Category[];
    /**
     * Emoji component
     */
    renderEmoji: React.FC<{
        emoji: string;
    }>;
    /**
     * Select emoji handler
     */
    onSelect?: (emoji: string) => void;
    /**
     * Handle clicking outside of picker
     */
    onClose?: () => void;
}
/**
 * Emoji Picker (later media picker, will need to refactor slightly)
 */
export declare function Picker({ emojis, categories, renderEmoji: Emoji, onSelect, onClose, }: Props): JSX.Element;
export {};
