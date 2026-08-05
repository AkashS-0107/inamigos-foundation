import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, Play, Video } from "lucide-react";
import { GalleryLightbox } from "./GalleryLightbox";
import type { GalleryCategory, GalleryItem } from "@/types/impact";

interface GalleryGridProps {
  categories: GalleryCategory[];
  items: GalleryItem[];
}

export function GalleryGrid({ categories, items }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const handleNext = () => {
    if (!activeLightboxItem) return;
    const idx = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const nextIdx = (idx + 1) % filteredItems.length;
    setActiveLightboxItem(filteredItems[nextIdx]);
  };

  const handlePrev = () => {
    if (!activeLightboxItem) return;
    const idx = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const prevIdx = (idx - 1 + filteredItems.length) % filteredItems.length;
    setActiveLightboxItem(filteredItems[prevIdx]);
  };

  return (
    <section
      id="impact-gallery"
      aria-labelledby="gallery-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
            Visual Portfolio
          </span>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Authentic Moments of{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Hope & Action
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Browse captured memories from our field drives, medical camps, classrooms, and environmental initiatives.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                  isActive
                    ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                    : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-300"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Masonry Grid (CSS Columns Layout) */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveLightboxItem(item)}
                tabIndex={0}
                role="button"
                aria-label={`Open view for ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveLightboxItem(item);
                  }
                }}
                className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-500 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                {/* Image / Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.type === "video" ? item.thumbnail || item.src : item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Video Badge */}
                  {item.type === "video" && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                      <Video className="h-3.5 w-3.5" />
                      <span>{item.videoDuration || "Video"}</span>
                    </div>
                  )}

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 rounded-full bg-emerald-500/90 text-slate-950 text-xs font-bold px-2.5 py-0.5 shadow-md">
                    {item.category}
                  </div>

                  {/* Hover Overlay with details & expand icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {item.type === "video" ? (
                          <Play className="h-5 w-5 fill-slate-950 ml-0.5" />
                        ) : (
                          <Expand className="h-5 w-5" />
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2">
                        {item.description}
                      </p>
                      <p className="mt-2 text-[11px] font-medium text-emerald-400">
                        {item.location} • {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Accessible Lightbox Modal */}
        <GalleryLightbox
          isOpen={activeLightboxItem !== null}
          activeItem={activeLightboxItem}
          items={filteredItems}
          onClose={() => setActiveLightboxItem(null)}
          onSelectNext={handleNext}
          onSelectPrev={handlePrev}
        />
      </div>
    </section>
  );
}
