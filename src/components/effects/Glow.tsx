import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";

import { classNames } from "@/utils";

export interface GlowProps extends HTMLAttributes<HTMLDivElement> {
  /** Glow color. Semantic color tokens adapt automatically to the active theme. */
  color?: string;
  /** Diameter of the radial glow. */
  size?: CSSProperties["width"];
  /** Intensity from 0 to 1. */
  intensity?: number;
  /** Blur amount applied to the glow edge. */
  blur?: CSSProperties["filter"];
}

/** Soft radial light for ambient decoration inside a positioned parent. */
export const Glow = forwardRef<HTMLDivElement, GlowProps>(function Glow(
  { color = "var(--color-primary)", size = "24rem", intensity = 0.18, blur = "blur(var(--blur-2xl))", className, style, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={classNames("ds-effect", className)}
      style={{ width: size, height: size, borderRadius: "var(--radius-full)", background: color, opacity: intensity, filter: blur, ...style }}
      {...props}
    />
  );
});
