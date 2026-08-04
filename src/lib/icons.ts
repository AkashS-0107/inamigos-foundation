import { ArrowDownRight, ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight, CircleHelp, ExternalLink, FolderKanban, HandHeart, Heart, HeartPulse, Home, Images, Info, Mail, Menu, MoveRight, Play, Plus, Quote, Search, Send, Sparkles, X } from "lucide-react";

/** Shared Lucide icons for application and design-system composition. */
export {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  ExternalLink,
  FolderKanban,
  HandHeart,
  Heart,
  HeartPulse,
  Home,
  Images,
  Info,
  Mail,
  Menu,
  MoveRight,
  Play,
  Plus,
  Quote,
  Search,
  Send,
  Sparkles,
  X,
};
export type { LucideIcon } from "lucide-react";

/** Icon registry prevents icon-package imports from leaking into application data. */
export const navigationIcons = {
  home: Home,
  about: Info,
  projects: FolderKanban,
  impact: HeartPulse,
  gallery: Images,
  volunteer: HandHeart,
  contact: Mail,
} as const;

export type NavigationIconName = keyof typeof navigationIcons;
