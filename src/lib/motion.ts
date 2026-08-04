import type { MotionProps, Transition, Variants } from "framer-motion";

export const motionTokens = {
  duration: {
    fast: 0.15,
    normal: 0.25,
    slow: 0.45,
  },
  easing: {
    spring: { type: "spring", stiffness: 320, damping: 28 },
    easeInOut: [0.4, 0, 0.2, 1],
    linear: "linear",
  },
} as const;

export const defaultTransition: Transition = {
  duration: motionTokens.duration.normal,
  ease: motionTokens.easing.easeInOut,
};

/** Opacity-only reveal variants. */
export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: defaultTransition },
};

/** Directional reveal variants with a consistent, restrained travel distance. */
export const slide = {
  up: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: defaultTransition },
  },
  down: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: defaultTransition },
  },
  left: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0, transition: defaultTransition },
  },
  right: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: defaultTransition },
  },
} satisfies Record<"up" | "down" | "left" | "right", Variants>;

/** Subtle scale reveal variants. */
export const scale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: defaultTransition },
};

/** Parent variants for coordinating children that use a shared reveal preset. */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

/** Mount and exit animation variants for route-level surfaces. */
export const page: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: defaultTransition },
  exit: { opacity: 0, y: -8, transition: { duration: motionTokens.duration.fast } },
};

/** Reusable interaction props for pressable surfaces. */
export const hover: Pick<MotionProps, "whileHover" | "whileTap"> = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

// Backward-compatible named preset exports.
export const fadeIn = fade;
export const slideUp = slide.up;
export const slideDown = slide.down;
export const slideLeft = slide.left;
export const slideRight = slide.right;
export const scaleIn = scale;
export const staggerContainer = stagger;
export const pageTransition = page;
export const hoverScale = hover;
