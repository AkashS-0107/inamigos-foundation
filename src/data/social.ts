import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "@/lib/icons";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

/** Official InAmigos Foundation social channels. */
export const socialLinks: readonly SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/inamigos/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/inamigos.inamigos", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/inamigos-foundation/", icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/@inamigosfoundation", icon: Youtube },
  { label: "Twitter / X", href: "https://twitter.com/inamigos", icon: Twitter },
];
