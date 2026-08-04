import type { PropsWithChildren } from "react";

/** Reserved composition boundary for future cross-cutting application contexts. */
export function FutureContextsProvider({ children }: PropsWithChildren) {
  return children;
}
