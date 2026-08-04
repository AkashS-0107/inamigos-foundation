import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import { classNames } from "@/utils";

export type SectionSpacing = "none" | "4" | "6" | "8" | "12" | "16" | "24" | CSSProperties["paddingBlock"];

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Vertical section spacing. The default remains responsive through the design-system stylesheet. */
  spacing?: SectionSpacing;
}

/** Full-width vertical section with responsive token spacing. */
export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { className, spacing, style, ...props },
  ref,
) {
  const paddingBlock =
    spacing === undefined ? undefined : spacing === "none" ? 0 : typeof spacing === "string" && /^\d+$/.test(spacing) ? `var(--space-${spacing})` : spacing;

  return <section ref={ref} className={classNames("ds-section", className)} style={{ paddingBlock, ...style }} {...props} />;
});
