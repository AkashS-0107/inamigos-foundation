import { fontConfig } from "@/lib/fonts";

export const siteConfig = {
  name: "InAmigos Foundation",
  description: "Creating meaningful social impact through community-led action.",
} as const;

export const themeConfig = {
  colors: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
  },
  typography: fontConfig,
  container: {
    maxWidth: "var(--container-max-width)",
    gutter: "var(--container-gutter)",
  },
  borderRadius: {
    small: "var(--radius-sm)",
    medium: "var(--radius-md)",
    large: "var(--radius-lg)",
    extraLarge: "var(--radius-xl)",
    full: "var(--radius-full)",
  },
  animation: {
    duration: "var(--duration-normal)",
    easing: "var(--ease-in-out)",
  },
} as const;
