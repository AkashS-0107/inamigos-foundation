import { createElement, forwardRef, type HTMLAttributes } from "react";
import { classNames } from "@/utils";
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> { level?: 1 | 2 | 3 | 4 | 5 | 6; }
/** Display heading with semantic level selection. */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading({ level = 2, className, ...props }, ref) { return createElement(`h${level}`, { ref, className: classNames("ds-heading", className), ...props }); });
/** Muted body copy primitive. */
export const Paragraph = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(function Paragraph({ className, ...props }, ref) { return <p ref={ref} className={classNames("ds-paragraph", className)} {...props} />; });
