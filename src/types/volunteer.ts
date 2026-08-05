export type VolunteerLocationType = "On-Site" | "Remote" | "Hybrid";

export interface VolunteerRole {
  id: string;
  title: string;
  category: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  requiredSkills: string[];
  timeCommitment: string;
  location: VolunteerLocationType;
  spotsAvailable?: number;
  ctaText: string;
  urgent?: boolean;
  impactSummary: string;
}

export interface VolunteerBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlightText?: string;
  gradient?: string;
}

export interface JourneyStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  duration: string;
  keyActions: string[];
}

export interface VolunteerTestimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  quote: string;
  tenure: string;
  impactHighlight: string;
  location: string;
  rating?: number;
}

export interface VolunteerFAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface VolunteerCTAContent {
  headline: string;
  subheadline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  tertiaryCta?: { label: string; href: string };
  stats: { label: string; value: string }[];
}

export interface VolunteerHeaderContent {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  badgeText: string;
  quickStats: { label: string; value: string }[];
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  roleId: string;
  locationType: string;
  availability: string;
  motivation: string;
}
