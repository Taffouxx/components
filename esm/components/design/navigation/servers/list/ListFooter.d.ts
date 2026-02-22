export interface FooterProps {
    createServer: () => void;
    showDiscover?: boolean;
}
/**
 * Buttons at the bottom of the list, including "create new server" and "discovery".
 */
export declare function ListFooter({ createServer, showDiscover }: FooterProps): JSX.Element;
