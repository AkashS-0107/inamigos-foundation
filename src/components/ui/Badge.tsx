import { forwardRef, type HTMLAttributes } from "react";
import { classNames } from "@/utils";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> { variant?: "solid" | "outline"; }
/** Compact status or category marker. */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge({ className, variant = "solid", ...props }, ref) { return <span ref={ref} className={classNames("ds-badge", variant === "outline" && "ds-badge--outline", className)} {...props} />; });
