import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

export type ThemeMode = "light" | "dark" | "system";
type ResolvedTheme = Exclude<ThemeMode, "system">;
const defaultStorageKey = "inamigos-theme";

interface ThemeContextValue {
  theme: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeMode) => void;
}

export interface ThemeProviderProps extends PropsWithChildren {
  /** Initial visual mode when no saved preference is available. */
  defaultTheme?: ThemeMode;
  /** Browser storage key used to preserve explicit user choices. Set false to disable persistence. */
  storageKey?: string | false;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function resolveTheme(theme: ThemeMode): ResolvedTheme {
  if (theme !== "system") return theme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Provides light, dark, and system theme state for future theme controls. */
export function ThemeProvider({ children, defaultTheme = "system", storageKey = defaultStorageKey }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (!storageKey) return defaultTheme;
    const savedTheme = window.localStorage.getItem(storageKey);
    return savedTheme === "light" || savedTheme === "dark" || savedTheme === "system" ? savedTheme : defaultTheme;
  });
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => resolveTheme(theme));

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => setResolvedTheme(resolveTheme(theme));

    applyTheme();
    mediaQuery.addEventListener("change", applyTheme);
    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  }, [resolvedTheme]);

  const updateTheme = useCallback((nextTheme: ThemeMode) => {
    setTheme(nextTheme);
    if (storageKey) window.localStorage.setItem(storageKey, nextTheme);
  }, [storageKey]);
  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme: updateTheme }),
    [resolvedTheme, theme, updateTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/** Reads and updates the current theme preference. */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider.");

  return context;
}
