/** TypeScript definitions for the Impact & Gallery experience section. */

export interface ImpactStat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  iconName: string;
  description: string;
  isVerified: boolean;
  verificationSource?: string;
  category?: string;
}

export interface ImpactStoryMetric {
  label: string;
  value: string;
}

export interface ImpactStoryData {
  id: string;
  tagline: string;
  title: string;
  subtitle: string;
  storyParagraphs: string[];
  quote: {
    text: string;
    author: string;
    role: string;
    location: string;
    avatar: string;
  };
  image: string;
  imageAlt: string;
  badgeText: string;
  metrics: ImpactStoryMetric[];
  cta: {
    primaryText: string;
    primaryHref: string;
    secondaryText: string;
    secondaryHref: string;
  };
}

export type GalleryCategory =
  | "All"
  | "Education"
  | "Healthcare"
  | "Environment"
  | "Community"
  | "Events";

export type GalleryItemType = "image" | "video";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  type: GalleryItemType;
  src: string;
  thumbnail?: string;
  videoDuration?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
  date: string;
  location: string;
  description: string;
  tags: string[];
  photographerOrCredit?: string;
}

export type TestimonialCategory = "All" | "Volunteer" | "Beneficiary" | "Partner";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  category: TestimonialCategory;
  organizationOrBatch?: string;
  avatar: string;
  quote: string;
  location: string;
  rating: number;
  date?: string;
  isVerified: boolean;
}

export type RecognitionType = "partner" | "certificate" | "award" | "media";

export interface RecognitionItem {
  id: string;
  name: string;
  type: RecognitionType;
  logo: string;
  categoryBadge: string;
  title: string;
  issuedByOrOutlet?: string;
  date: string;
  description: string;
  externalUrl?: string;
  isFeatured: boolean;
}

export interface ImpactSectionData {
  stats: ImpactStat[];
  story: ImpactStoryData;
  galleryCategories: GalleryCategory[];
  gallery: GalleryItem[];
  testimonials: TestimonialItem[];
  recognition: RecognitionItem[];
}
