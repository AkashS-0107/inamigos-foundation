import { useEffect, useState } from "react";

export interface UseAnimatedCounterOptions {
  targetValue: number;
  durationMs?: number;
  shouldStart?: boolean;
}

/**
  Hook for animated numbers counting up when an element comes into view.
  Automatically respects prefers-reduced-motion by rendering final value immediately if preferred.
 */
export function useAnimatedCounter({
  targetValue,
  durationMs = 2000,
  shouldStart = true,
}: UseAnimatedCounterOptions): number {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Check user accessibility preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !shouldStart) {
      setCount(shouldStart ? targetValue : 0);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);

      // Ease-out expo curve for organic feeling count
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easedProgress * targetValue);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [targetValue, durationMs, shouldStart]);

  return count;
}
