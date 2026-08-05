import { motion } from "framer-motion";
import type { GalleryCategory } from "@/types/gallery";

interface GalleryFiltersProps {
  categories: GalleryCategory[];
  activeCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
  categoryCounts: Record<GalleryCategory, number>;
}

export function GalleryFilters({
  categories,
  activeCategory,
  onSelectCategory,
  categoryCounts,
}: GalleryFiltersProps) {
  return (
    <nav
      className="flex justify-center mb-10 sm:mb-12 relative z-10"
      aria-label="Gallery category filters"
    >
      <div
        role="tablist"
        aria-label="Filter gallery items by category"
        className="flex flex-wrap items-center justify-center gap-2 p-2 bg-slate-900/80 border border-slate-800/80 rounded-2xl sm:rounded-full backdrop-blur-xl max-w-5xl shadow-xl"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = categoryCounts[cat] ?? 0;

          return (
            <button
              key={cat}
              role="tab"
              id={`tab-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              aria-selected={isActive}
              aria-controls="gallery-grid"
              onClick={() => onSelectCategory(cat)}
              className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                isActive
                  ? "text-slate-950 font-bold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-md shadow-emerald-500/25"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
              <span
                className={`relative z-10 text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? "bg-slate-950/20 text-slate-950"
                    : "bg-slate-800 text-slate-400 border border-slate-700/50"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
