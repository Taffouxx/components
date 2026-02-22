import React from "react";
import { DraggableProvided, DropResult } from "react-beautiful-dnd";
export declare type DraggableProps<T> = {
    provided: DraggableProvided;
    item: T;
    isDragging: boolean;
};
/**
 * Height Preserving Item
 *
 * https://codesandbox.io/s/react-virutoso-with-react-beautiful-dnd-e6vmq?file=/src/index.js:1734-2319
 */
export declare function useHeightPreservingItem(): ({ children, ...props }: {
    children: React.ReactNode;
    "data-known-size": number;
}) => JSX.Element;
/**
 * Short-hand for creating object with Item component
 * @returns Components
 */
export declare function useDndComponents(): {
    Item: ({ children, ...props }: {
        children: React.ReactNode;
        "data-known-size": number;
    }) => JSX.Element;
};
/**
 * Re-order a list
 *
 * https://codesandbox.io/s/react-virutoso-with-react-beautiful-dnd-e6vmq?file=/src/index.js:732-923
 *
 * @param list Input list
 * @param startIndex Start index
 * @param endIndex End index
 * @returns New list
 */
export declare function reorder(list: any[], startIndex: number, endIndex: number): any[];
/**
 * Create a new drag end handler
 *
 * https://codesandbox.io/s/react-virutoso-with-react-beautiful-dnd-e6vmq?file=/src/index.js:1377-1733
 *
 * @param setItems Item setter
 * @returns Drag end handler
 */
export declare function useDragEndReorder(setItems: (v: (items: any[]) => any[]) => void): (result: DropResult) => void;
/**
 * Modified version of above function to provide simple reordering interface
 *
 * @param reorder Reorder function
 * @returns Drag end handler
 */
export declare function useDragEndCustomReorder(reorder: (source: number, dest: number) => void): (result: DropResult) => void;
