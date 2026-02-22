import type { Server } from "revolt.js";
import { DraggableProps } from "../../../../common";
import { INotificationChecker } from "revolt.js/dist/util/Unreads";
export declare const ItemContainer: import("styled-components").StyledComponent<"div", any, {
    head?: boolean | undefined;
}, never>;
export declare function SwooshOverlay(): JSX.Element;
export declare type InnerProps = {
    item: Server;
    permit: INotificationChecker;
};
declare type Props = DraggableProps<Server> & InnerProps & {
    active: boolean;
};
export declare function Item({ provided, isDragging, active, ...innerProps }: Props): JSX.Element;
export {};
