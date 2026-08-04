import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import { classNames } from "@/utils";

type EffectProps = HTMLAttributes<HTMLDivElement>;
/** Fills its parent with a configurable semantic linear gradient. */
export const GradientBackground = forwardRef<HTMLDivElement, EffectProps & { from?: string; to?: string; direction?: string }>(function GradientBackground({ from = "var(--color-background)", to = "var(--color-surface)", direction = "135deg", className, style, ...props }, ref) { return <div ref={ref} aria-hidden="true" className={classNames("ds-effect", className)} style={{ inset: 0, background: `linear-gradient(${direction}, ${from}, ${to})`, ...style }} {...props} />; });
/** Repeating grid texture using semantic border color. */
export const GridPattern = forwardRef<HTMLDivElement, EffectProps & { size?: CSSProperties["backgroundSize"]; opacity?: number }>(function GridPattern({ size = "var(--space-8) var(--space-8)", opacity = 0.35, className, style, ...props }, ref) { return <div ref={ref} aria-hidden="true" className={classNames("ds-effect ds-grid-pattern", className)} style={{ backgroundSize: size, opacity, ...style }} {...props} />; });
/** Named grid background export retained alongside GridPattern for descriptive composition APIs. */
export const GridBackground = GridPattern;
/** Radial highlight intended for positioned parent containers. */
export const Spotlight = forwardRef<HTMLDivElement, EffectProps & { color?: string; size?: string; x?: string; y?: string }>(function Spotlight({ color = "var(--color-primary)", size = "40rem", x = "50%", y = "50%", className, style, ...props }, ref) { return <div ref={ref} aria-hidden="true" className={classNames("ds-effect", className)} style={{ width: size, height: size, left: x, top: y, transform: "translate(-50%, -50%)", borderRadius: "var(--radius-full)", background: `radial-gradient(circle, color-mix(in srgb, ${color} 24%, transparent), transparent 70%)`, ...style }} {...props} />; });
/** Subtle procedural texture overlay. */
export const NoiseOverlay = forwardRef<HTMLDivElement, EffectProps>(function NoiseOverlay({ className, ...props }, ref) { return <div ref={ref} aria-hidden="true" className={classNames("ds-effect ds-noise", className)} {...props} />; });
/** Soft semantic color orb for ambient layering. */
export const Blob = forwardRef<HTMLDivElement, EffectProps & { color?: string; size?: string; blur?: string }>(function Blob({ color = "var(--color-primary)", size = "20rem", blur = "var(--space-8)", className, style, ...props }, ref) { return <div ref={ref} aria-hidden="true" className={classNames("ds-effect", className)} style={{ width: size, height: size, borderRadius: "var(--radius-full)", background: color, filter: `blur(${blur})`, opacity: 0.22, ...style }} {...props} />; });
