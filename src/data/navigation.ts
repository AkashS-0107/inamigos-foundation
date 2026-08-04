import { routePaths } from "@/app/routes";
import { navigationIcons } from "@/lib/icons";
import type { NavigationItem } from "@/types";

export const navigationItems: readonly NavigationItem[] = [
  { label: "Home", href: routePaths.home, icon: navigationIcons.home },
  { label: "About", href: routePaths.about, icon: navigationIcons.about },
  { label: "Projects", href: routePaths.projects, icon: navigationIcons.projects },
  { label: "Impact", href: routePaths.impact, icon: navigationIcons.impact },
  { label: "Gallery", href: routePaths.gallery, icon: navigationIcons.gallery },
  { label: "Volunteer", href: routePaths.volunteer, icon: navigationIcons.volunteer },
  { label: "Contact", href: routePaths.contact, icon: navigationIcons.contact },
];
