export declare type Props = {
    /**
     * Input string
     */
    input: string;
    /**
     * Maximum length
     */
    maxLength?: number;
};
/**
 * Initials component
 *
 * Takes some string and displays the first letter of each word
 */
export declare function Initials({ input, maxLength }: Props): JSX.Element;
