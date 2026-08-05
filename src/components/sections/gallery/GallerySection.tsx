import { useMemo, useState } from "react";
import { featuredGalleryItem, galleryItems } from "@/data/content/gallery";
import type { GalleryCategory, GalleryItem } from "@/types/gallery";
import { GalleryCarousel } from "./GalleryCarousel";
import { GalleryEmptyState } from "./GalleryEmptyState";
import { GalleryFeatured } from "./GalleryFeatured";
import { GalleryFilters } from "./GalleryFilters";
import { GalleryGrid } from "./GalleryGrid";
import { GalleryHeader } from "./GalleryHeader";
import { GalleryLightbox } from "./GalleryLightbox";

const ALL_CATEGORIES: GalleryCategory[] = [
  "All",
  "Education",
  "Healthcare",
  "Environment",
  "Food Relief",
  "Community",
  "Events",
  "Celebrations",
  "Tree Plantation",
  "Medical Camps",
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  // Compute item counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<GalleryCategory, number> = {
      All: galleryItems.length,
      Education: 0,
      Healthcare: 0,
      Environment: 0,
      "Food Relief": 0,
      Community: 0,
      Events: 0,
      Celebrations: 0,
      "Tree Plantation": 0,
      "Medical Camps": 0,
    };

    galleryItems.forEach((item) => {
      if (counts[item.category] !== undefined) {
        counts[item.category] += 1;
      }
    });

    return counts;
  }, []);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="gallery"
      aria-label="InAmigos Foundation Activity Gallery"
      className="relative py-20 sm:py-28 bg-slate-950 text-white overflow-hidden border-t border-slate-900 scroll-mt-20"
    >
      {/* Background ambient lighting effects */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]"
        role="presentation"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[160px]"
        role="presentation"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px]"
        role="presentation"
      />

      {/* 1. Gallery Header */}
      <GalleryHeader />

      {/* 2. Featured Gallery Story Card */}
      <GalleryFeatured
        item={featuredGalleryItem}
        onExpand={(item) => setActiveLightboxItem(item)}
      />

      {/* 3. Horizontal Highlight Carousel */}
      <GalleryCarousel
        items={galleryItems}
        onSelectImage={(item) => setActiveLightboxItem(item)}
      />

      {/* 4. Gallery Category Filters */}
      <GalleryFilters
        categories={ALL_CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        categoryCounts={categoryCounts}
      />

      {/* 5. Responsive Masonry Grid or Empty State */}
      {filteredItems.length > 0 ? (
        <GalleryGrid
          items={filteredItems}
          onSelectImage={(item) => setActiveLightboxItem(item)}
        />
      ) : (
        <GalleryEmptyState
          category={activeCategory}
          onReset={() => setActiveCategory("All")}
        />
      )}

      {/* 6. Lightbox Modal */}
      <GalleryLightbox
        item={activeLightboxItem}
        items={filteredItems.length > 0 ? filteredItems : galleryItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(newItem) => setActiveLightboxItem(newItem)}
      />
    </section>
  );
}
