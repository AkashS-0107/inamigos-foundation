import type { PropsWithChildren } from "react";

import { FutureContextsProvider } from "./FutureContextsProvider";
import { MotionProvider } from "./MotionProvider";
import { ThemeProvider } from "./ThemeProvider";

/** Single provider boundary for the full application. */
export function AppProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <MotionProvider>
        <FutureContextsProvider>{children}</FutureContextsProvider>
      </MotionProvider>
    </ThemeProvider>
  );
}
