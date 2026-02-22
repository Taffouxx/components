import { DependencyList } from "react";
export declare function debounce(cb: (...args: unknown[]) => void, duration: number): (...args: unknown[]) => void;
export declare function useDebounceCallback(cb: (...args: unknown[]) => void, inputs: DependencyList, duration?: number): (...args: unknown[]) => void;
