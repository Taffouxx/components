import { TippyProps } from "@tippyjs/react";
export declare type TooltipProps = TippyProps & {
    /**
     * Add wrapper <div/> around content.
     *
     * Necessary if child element is an SVG, since
     * bounding box calculations may go wrong and
     * the tooltip likely won't display.
     */
    div?: boolean;
    /**
     * Short-hand for placement="right"
     */
    right?: boolean;
    /**
     * i18n key for tooltip text
     */
    i18n?: string;
};
/**
 * Generic tooltip component
 */
export declare function Tooltip({ div, ...props }: TooltipProps): JSX.Element;
