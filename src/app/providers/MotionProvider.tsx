import { createContext, useContext, useMemo, type PropsWithChildren } from "react";
import { useReducedMotion } from "framer-motion";

interface MotionContextValue {
  shouldReduceMotion: boolean;
}

const MotionContext = createContext<MotionContextValue | undefined>(undefined);

/** Makes the user's reduced-motion preference available to future motion components. */
export function MotionProvider({ children }: PropsWithChildren) {
  const reducedMotion = useReducedMotion();
  const value = useMemo(() => ({ shouldReduceMotion: Boolean(reducedMotion) }), [reducedMotion]);

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotionPreference(): MotionContextValue {
  const context = useContext(MotionContext);
  if (!context) throw new Error("useMotionPreference must be used within MotionProvider.");

  return context;
}
