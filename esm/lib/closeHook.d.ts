/// <reference types="react" />
/**
 * Trigger close event if an interaction occurs outside of a given element
 * @param onClose Function to call on close
 * @returns Ref object to pass to parent element
 */
export default function useCloseHook(onClose?: () => void): import("react").MutableRefObject<null>;
