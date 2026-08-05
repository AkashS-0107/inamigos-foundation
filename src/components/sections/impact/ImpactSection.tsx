import {
  galleryCategoriesData,
  galleryItemsData,
  impactStatsData,
  impactStoryData,
  recognitionData,
  testimonialsData,
} from "@/data/content/impact";
import { GalleryGrid } from "./GalleryGrid";
import { ImpactStats } from "./ImpactStats";
import { ImpactStory } from "./ImpactStory";
import { ImpactTestimonials } from "./ImpactTestimonials";
import { RecognitionSection } from "./RecognitionSection";

export function ImpactSection() {
  return (
    <div className="relative bg-slate-950 text-white overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />

      {/* Section 1: Animated Impact Statistics */}
      <ImpactStats stats={impactStatsData} />

      {/* Section 2: Large Split Impact Story */}
      <ImpactStory story={impactStoryData} />

      {/* Section 3: Responsive Masonry Gallery with Lightbox Modal */}
      <GalleryGrid
        categories={galleryCategoriesData}
        items={galleryItemsData}
      />

      {/* Section 4: Categorized Community Testimonials */}
      <ImpactTestimonials testimonials={testimonialsData} />

      {/* Section 5: Trust, Accolades & Logo Strip */}
      <RecognitionSection recognitionItems={recognitionData} />
    </div>
  );
}
