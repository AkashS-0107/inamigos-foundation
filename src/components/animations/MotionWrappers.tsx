import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps, type Transition, type Variants } from "framer-motion";
import { fade, motionTokens, page, scale, slide, stagger } from "@/lib";

type RevealProps = Omit<HTMLMotionProps<"div">, "animate" | "initial" | "variants" | "transition"> & {
  children: ReactNode;
  /** Delay, in seconds, before the wrapper begins animating. */
  delay?: number;
  /** Duration, in seconds. Uses the motion preset default when omitted. */
  duration?: number;
  transition?: Transition;
};

type ScrollRevealProps = Omit<RevealProps, "whileInView"> & {
  /** Viewport settings passed to Framer Motion's whileInView. */
  viewport?: HTMLMotionProps<"div">["viewport"];
};

const defaultViewport = { once: true, amount: 0.15 } as const;

function buildTransition(delay?: number, duration?: number, transition?: Transition): Transition | undefined {
  if (delay === undefined && duration === undefined && transition === undefined) return undefined;

  return {
    ...(delay === undefined ? {} : { delay }),
    ...(duration === undefined ? {} : { duration }),
    ...transition,
  };
}

function Reveal({ children, variants, delay, duration, transition, ...props }: RevealProps & { variants: Variants }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
      variants={variants}
      transition={buildTransition(delay, duration, transition)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Fades content into view when mounted. */
export function FadeIn(props: RevealProps) {
  return <Reveal variants={fade} {...props} />;
}

/** Moves content upward while revealing it when mounted. */
export function SlideUp(props: RevealProps) {
  return <Reveal variants={slide.up} {...props} />;
}

/** Moves content downward while revealing it when mounted. */
export function SlideDown(props: RevealProps) {
  return <Reveal variants={slide.down} {...props} />;
}

/** Moves content from the right while revealing it when mounted. */
export function SlideLeft(props: RevealProps) {
  return <Reveal variants={slide.left} {...props} />;
}

/** Moves content from the left while revealing it when mounted. */
export function SlideRight(props: RevealProps) {
  return <Reveal variants={slide.right} {...props} />;
}

/** Scales content from a subtle reduced state when mounted. */
export function ScaleIn(props: RevealProps) {
  return <Reveal variants={scale} {...props} />;
}

/** Rotates content into its natural position while revealing it. */
export function RotateIn({ children, delay, duration, transition, ...props }: RevealProps) {
  return (
    <Reveal
      variants={{
        hidden: { opacity: 0, rotate: -4, scale: 0.98 },
        visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: motionTokens.duration.normal, ease: motionTokens.easing.easeInOut } },
      }}
      delay={delay}
      duration={duration}
      transition={transition}
      {...props}
    >
      {children}
    </Reveal>
  );
}

export interface StaggerContainerProps extends RevealProps {
  /** Delay between each animated child, in seconds. */
  staggerChildren?: number;
}

/** Coordinates direct child wrappers that use any of the reveal components. */
export function StaggerContainer({ children, delay, duration, transition, staggerChildren, ...props }: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants: Variants = {
    ...stagger,
    visible: {
      transition: {
        staggerChildren: staggerChildren ?? 0.08,
        delayChildren: delay ?? 0.04,
        ...(duration === undefined ? {} : { duration }),
        ...transition,
      },
    },
  };

  return (
    <motion.div initial={shouldReduceMotion ? false : "hidden"} animate="visible" variants={variants} {...props}>
      {children}
    </motion.div>
  );
}

/** Reveals content once it enters the viewport. */
export function RevealOnScroll({ children, delay, duration, transition, viewport = defaultViewport, ...props }: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewport}
      variants={slide.up}
      transition={buildTransition(delay, duration, transition)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface FloatingElementProps extends Omit<RevealProps, "transition"> {
  /** Travel distance in pixels. */
  distance?: number;
  transition?: Transition;
}

/** Applies a low-amplitude, continuous vertical motion for decorative content. */
export function FloatingElement({ children, delay = 0, duration = 3, distance = 8, transition, ...props }: FloatingElementProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={shouldReduceMotion ? undefined : { y: [0, -distance, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut", ...transition }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type HoverEffectProps = Omit<RevealProps, "transition" | "whileFocus" | "whileHover"> & {
  hoverTarget: NonNullable<HTMLMotionProps<"div">["whileHover"]>;
  transition?: Transition;
};

function HoverEffect({ children, delay = 0, duration = motionTokens.duration.fast, hoverTarget, transition, ...props }: HoverEffectProps) {
  const shouldReduceMotion = useReducedMotion();
  const hoverTransition = { delay, duration, ...transition };

  return (
    <motion.div
      {...props}
      whileHover={shouldReduceMotion ? undefined : hoverTarget}
      whileFocus={shouldReduceMotion ? undefined : hoverTarget}
      transition={hoverTransition}
    >
      {children}
    </motion.div>
  );
}

export interface HoverScaleProps extends Omit<RevealProps, "transition" | "whileFocus" | "whileHover"> {
  scale?: number;
  transition?: Transition;
}

/** Adds a restrained scale response for interactive surfaces. */
export function HoverScale({ children, delay = 0, duration = motionTokens.duration.fast, scale: scaleAmount = 1.02, transition, ...props }: HoverScaleProps) {
  return <HoverEffect hoverTarget={{ scale: scaleAmount }} delay={delay} duration={duration} transition={transition} {...props}>{children}</HoverEffect>;
}

export interface HoverGlowProps extends Omit<RevealProps, "transition" | "whileFocus" | "whileHover"> {
  glow?: string;
  transition?: Transition;
}

/** Adds a token-based elevation glow for interactive surfaces. */
export function HoverGlow({ children, delay = 0, duration = motionTokens.duration.fast, glow = "var(--shadow-lg)", transition, ...props }: HoverGlowProps) {
  return <HoverEffect hoverTarget={{ boxShadow: glow }} delay={delay} duration={duration} transition={transition} {...props}>{children}</HoverEffect>;
}

/** Route-level mount and exit transition wrapper for use inside AnimatePresence. */
export function PageTransition({ children, delay, duration, transition, ...props }: Omit<RevealProps, "exit">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      initial={shouldReduceMotion ? false : "initial"}
      animate="animate"
      exit="exit"
      variants={page}
      transition={buildTransition(delay, duration, transition)}
    >
      {children}
    </motion.div>
  );
}
