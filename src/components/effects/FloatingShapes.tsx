import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";

import { classNames } from "@/utils";

export type FloatingShapeKind = "circle" | "square" | "diamond";

export interface FloatingShape {
  /** Shape geometry. */
  kind?: FloatingShapeKind;
  /** Horizontal start position as a CSS percentage. */
  x: number;
  /** Vertical start position as a CSS percentage. */
  y: number;
  /** Shape size in CSS pixels. */
  size?: number;
  /** Shape color, ideally a semantic token. */
  color?: string;
  /** Animation delay in seconds. */
  delay?: number;
}

export interface FloatingShapesProps extends HTMLAttributes<HTMLDivElement> {
  /** Shapes to render. Defaults provide a balanced ambient composition. */
  shapes?: readonly FloatingShape[];
  /** Float animation cycle length. */
  duration?: CSSProperties["animationDuration"];
  /** Shared transparency for all shapes. */
  opacity?: number;
}

const defaultShapes: readonly FloatingShape[] = [
  { x: 8, y: 18, size: 36, color: "var(--color-primary)", delay: -1 },
  { x: 82, y: 12, size: 24, color: "var(--color-accent)", kind: "diamond", delay: -3 },
  { x: 76, y: 76, size: 42, color: "var(--color-secondary)", kind: "circle", delay: -5 },
];

/** Small animated geometric accents for decorative background layers. */
export const FloatingShapes = forwardRef<HTMLDivElement, FloatingShapesProps>(function FloatingShapes(
  { shapes = defaultShapes, duration = "var(--duration-slowest)", opacity = 0.16, className, style, ...props },
  ref,
) {
  return (
    <div ref={ref} aria-hidden="true" className={classNames("ds-effect ds-floating-shapes", className)} style={{ inset: 0, ...style }} {...props}>
      {shapes.map((shape, index) => {
        const size = shape.size ?? 32;
        const kind = shape.kind ?? "circle";
        return <span key={`${shape.x}-${shape.y}-${index}`} className={classNames("ds-floating-shape", `ds-floating-shape--${kind}`)} style={{ left: `${shape.x}%`, top: `${shape.y}%`, width: size, height: size, background: shape.color ?? "var(--color-primary)", opacity, animationDelay: `${shape.delay ?? 0}s`, animationDuration: duration }} />;
      })}
    </div>
  );
});
