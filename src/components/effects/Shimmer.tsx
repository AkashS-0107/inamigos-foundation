import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";

import { classNames } from "@/utils";

export interface ShimmerProps extends HTMLAttributes<HTMLDivElement> {
  /** Base color beneath the moving highlight. */
  baseColor?: string;
  /** Highlight color moving across the surface. */
  highlightColor?: string;
  /** Animation cycle length. */
  duration?: CSSProperties["animationDuration"];
  /** Angle of the shimmering band. */
  angle?: number;
}

/** Decorative animated highlight layer, useful for loading and glass surfaces. */
export const Shimmer = forwardRef<HTMLDivElement, ShimmerProps>(function Shimmer(
  {
    baseColor = "color-mix(in srgb, var(--color-surface) 72%, transparent)",
    highlightColor = "color-mix(in srgb, var(--color-text-primary) 14%, transparent)",
    duration = "var(--duration-slower)",
    angle = 110,
    className,
    style,
    ...props
  },
  ref,
) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={classNames("ds-effect ds-shimmer", className)}
      style={{
        inset: 0,
        background: `linear-gradient(${angle}deg, ${baseColor} 30%, ${highlightColor} 50%, ${baseColor} 70%)`,
        backgroundSize: "220% 100%",
        animationDuration: duration,
        ...style,
      }}
      {...props}
    />
  );
});
