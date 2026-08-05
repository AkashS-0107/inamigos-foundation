import { Github, Instagram, Linkedin } from "@/lib/icons";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

/** Placeholder channels kept in data so they can be replaced without changing the shell. */
export const socialLinks: readonly SocialLink[] = [
  { label: "Instagram", href: "#instagram", icon: Instagram },
  { label: "LinkedIn", href: "#linkedin", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/", icon: Github },
];
