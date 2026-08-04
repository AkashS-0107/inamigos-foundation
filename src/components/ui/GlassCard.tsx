import { forwardRef } from "react";
import { classNames } from "@/utils";
import { Card, type CardProps } from "./Card";
/** Translucent surface container for layered layouts. */
export const GlassCard = forwardRef<HTMLDivElement, CardProps>(function GlassCard({ className, ...props }, ref) { return <Card ref={ref} className={classNames("ds-glass-card", className)} {...props} />; });
