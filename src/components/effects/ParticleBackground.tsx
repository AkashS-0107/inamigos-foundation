import { forwardRef, useMemo, type CSSProperties, type HTMLAttributes } from "react";

import { classNames } from "@/utils";

export interface Particle {
  /** Horizontal start position as a CSS percentage. */
  x: number;
  /** Vertical start position as a CSS percentage. */
  y: number;
  /** Particle diameter in pixels. */
  size?: number;
  /** Per-particle opacity from 0 to 1. */
  opacity?: number;
  /** Animation delay in seconds. */
  delay?: number;
}

export interface ParticleBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of deterministic particles to generate when particles is omitted. */
  count?: number;
  /** Explicit particles for art-directed layouts. */
  particles?: readonly Particle[];
  /** Particle fill color. */
  color?: string;
  /** Float animation cycle length. */
  duration?: CSSProperties["animationDuration"];
}

const createParticles = (count: number): Particle[] =>
  Array.from({ length: count }, (_, index) => ({
    x: (index * 37 + 11) % 100,
    y: (index * 61 + 17) % 100,
    size: 2 + ((index * 7) % 5),
    opacity: 0.2 + ((index * 13) % 50) / 100,
    delay: -((index * 11) % 18) / 3,
  }));

/** Lightweight, deterministic field of ambient particles for positioned backgrounds. */
export const ParticleBackground = forwardRef<HTMLDivElement, ParticleBackgroundProps>(function ParticleBackground(
  { count = 24, particles, color = "var(--color-primary)", duration = "var(--duration-slowest)", className, style, ...props },
  ref,
) {
  const generatedParticles = useMemo(() => createParticles(count), [count]);
  const items = particles ?? generatedParticles;

  return (
    <div ref={ref} aria-hidden="true" className={classNames("ds-effect ds-particle-background", className)} style={{ inset: 0, ...style }} {...props}>
      {items.map((particle, index) => (
        <span
          key={`${particle.x}-${particle.y}-${index}`}
          className="ds-particle"
          style={{
            left: `${particle.x}%`, top: `${particle.y}%`, width: particle.size ?? 4, height: particle.size ?? 4,
            background: color, opacity: particle.opacity ?? 0.45, animationDelay: `${particle.delay ?? 0}s`, animationDuration: duration,
          }}
        />
      ))}
    </div>
  );
});
