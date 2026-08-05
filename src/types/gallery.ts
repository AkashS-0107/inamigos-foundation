export type GalleryCategory =
  | "All"
  | "Education"
  | "Healthcare"
  | "Environment"
  | "Food Relief"
  | "Community"
  | "Events"
  | "Celebrations"
  | "Tree Plantation"
  | "Medical Camps";

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: GalleryCategory;
  coverImage: string;
  thumbnail: string;
  altText: string;
  eventName: string;
  location: string;
  date: string;
  tags: string[];
  featured: boolean;
  loadingStrategy?: "lazy" | "eager";
  photographer?: string;
  aspectRatio?: "square" | "landscape" | "portrait" | "wide";
}

export interface FeaturedGalleryItem extends GalleryItem {
  campaignStory: string;
  ctaText?: string;
  ctaLink?: string;
  impactMetrics?: {
    label: string;
    value: string;
  }[];
}

export interface GalleryFilterOption {
  id: GalleryCategory;
  label: string;
  count: number;
}
