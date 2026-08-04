import { forwardRef, type HTMLAttributes } from "react";
import { classNames } from "@/utils";
export interface CardProps extends HTMLAttributes<HTMLDivElement> { padding?: "none" | "sm" | "md" | "lg"; }
/** Surface container for grouped content. */
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card({ className, padding = "md", ...props }, ref) { return <div ref={ref} className={classNames("ds-card", `ds-card--padding-${padding}`, className)} {...props} />; });
