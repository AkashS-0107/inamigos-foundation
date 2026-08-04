import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { classNames } from "@/utils";
export interface ChipProps extends HTMLAttributes<HTMLSpanElement> { startIcon?: ReactNode; endIcon?: ReactNode; }
/** Neutral inline label for filtering or metadata. */
export const Chip = forwardRef<HTMLSpanElement, ChipProps>(function Chip({ className, startIcon, endIcon, children, ...props }, ref) { return <span ref={ref} className={classNames("ds-chip", className)} {...props}>{startIcon}{children}{endIcon}</span>; });
