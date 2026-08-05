export type Category =
  | "All"
  | "Education"
  | "Healthcare"
  | "Environment"
  | "Community Development"
  | "Skill Development";

export type ProjectStatus = "Active" | "Ongoing" | "Upcoming" | "Completed" | "Featured";

export interface ImageMetadata {
  coverImage: string;
  placeholderImage: string;
  altText: string;
  fallbackImage: string;
}

export interface ImpactMetric {
  label: string;
  value: string;
  iconName?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<Category, "All">;
  status: ProjectStatus;
  description: string;
  summary: string;
  image: ImageMetadata;
  isFeatured?: boolean;
  location: string;
  startDate: string;
  metrics: ImpactMetric[];
  keyAchievements: string[];
  ctaLabel: string;
  ctaLink: string;
  tags: string[];
}

export interface FeaturedProject extends Project {
  isFeatured: true;
  story: string;
  verifiedBadge: string;
}

export interface CategoryInfo {
  id: Category;
  title: string;
  description: string;
  iconName: "FolderKanban" | "GraduationCap" | "HeartPulse" | "Leaf" | "Users" | "Sparkles";
  count: number;
  badge: string;
}

export interface ImpactHighlight {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
  iconName: "Building2" | "Users" | "HeartHandshake" | "Award";
}

export interface TimelineMilestone {
  id: string;
  year: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  impactMetric: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  iconName: "Rocket" | "TrendingUp" | "Globe" | "Users" | "Sparkles";
}

export interface CTAOption {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
  iconName: "HandHeart" | "Heart" | "Building2" | "Compass";
  badge?: string;
}

export interface ProjectsHeaderContent {
  eyebrow: string;
  title: string;
  description: string;
}
