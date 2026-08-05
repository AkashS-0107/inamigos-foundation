import type { ComponentProps } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  Camera,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  ExternalLink,
  FileText,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  HelpCircle,
  MapPin,
  Megaphone,
  MessageSquare,
  Pause,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trees,
  Trophy,
  UserCheck,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  HeartHandshake,
  Sparkles,
  Briefcase,
  Users,
  GraduationCap,
  Award,
  FileText,
  MessageSquare,
  UserCheck,
  BookOpen,
  Target,
  Trophy,
  Calendar,
  HeartPulse,
  Megaphone,
  Camera,
  Trees,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Star,
  X,
  ShieldCheck,
  Clock,
  MapPin,
  Play,
  Pause,
  HelpCircle,
  Send,
  ExternalLink,
};

interface VolunteerIconProps extends ComponentProps<"svg"> {
  name: string;
  size?: number;
  className?: string;
}

/** Renders a Lucide React icon dynamically by string name with fallback. */
export function VolunteerIcon({ name, size = 20, className = "", ...props }: VolunteerIconProps) {
  const IconComponent = ICON_MAP[name] || Sparkles;
  return <IconComponent size={size} className={className} aria-hidden="true" {...props} />;
}
