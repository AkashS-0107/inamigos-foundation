import { forwardRef, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";

import { classNames } from "@/utils";

export interface AnimatedBorderProps extends HTMLAttributes<HTMLDivElement> {
  /** Content enclosed by the animated border. */
  children: ReactNode;
  /** Border colors, in sequence around the gradient. */
  colors?: readonly string[];
  /** Visible border thickness. */
  thickness?: CSSProperties["padding"];
  /** Border rotation cycle length. */
  duration?: CSSProperties["animationDuration"];
  /** Radius applied to the frame and inner surface. */
  radius?: CSSProperties["borderRadius"];
  /** Inner surface color. */
  surfaceColor?: string;
}

/** Content wrapper with a token-aware rotating gradient frame. */
export const AnimatedBorder = forwardRef<HTMLDivElement, AnimatedBorderProps>(function AnimatedBorder(
  {
    children,
    colors = ["var(--color-primary)", "var(--color-accent)", "var(--color-secondary)", "var(--color-primary)"],
    thickness = "1px",
    duration = "var(--duration-slower)",
    radius = "var(--radius-lg)",
    surfaceColor = "var(--color-surface)",
    className,
    style,
    ...props
  },
  ref,
) {
  const normalizedThickness = typeof thickness === "number" ? `${thickness}px` : thickness;

  return (
    <div
      ref={ref}
      className={classNames("ds-animated-border", className)}
      style={{
        padding: normalizedThickness,
        borderRadius: radius,
        background: `conic-gradient(from var(--ds-border-angle), ${colors.join(", ")})`,
        animationDuration: duration,
        ...style,
      }}
      {...props}
    >
      <div className="ds-animated-border__inner" style={{ borderRadius: `calc(${radius} - ${normalizedThickness})`, background: surfaceColor }}>
        {children}
      </div>
    </div>
  );
});
