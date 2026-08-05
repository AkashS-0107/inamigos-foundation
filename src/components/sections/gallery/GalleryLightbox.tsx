import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryItem } from "@/types/gallery";
import {
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Tag,
  X,
} from "lucide-react";

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export function GalleryLightbox({
  item,
  items,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handlePrev = () => {
    if (currentIndex === -1 || items.length <= 1) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = () => {
    if (currentIndex === -1 || items.length <= 1) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  // Keyboard navigation & lock body scroll
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, currentIndex, items]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-950/95 backdrop-blur-2xl overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image modal: ${item.title}`}
          onClick={onClose}
        >
          {/* Main Modal Card */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Controls */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
                {items.length > 1 && (
                  <span className="text-xs text-slate-400 font-medium">
                    {currentIndex + 1} of {items.length}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close Lightbox"
                className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-rose-500/20 hover:border-rose-500/40 border border-slate-700/50 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Media Container */}
              <div className="lg:col-span-8 relative bg-slate-950 flex items-center justify-center min-h-[300px] sm:min-h-[420px] lg:min-h-[500px] p-2 sm:p-4 group">
                <img
                  src={item.coverImage}
                  alt={item.altText}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-xl"
                />

                {/* Left/Right Nav Buttons */}
                {items.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous Image"
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/90 text-white border border-slate-700 hover:bg-emerald-500 hover:text-slate-950 transition-all shadow-xl hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next Image"
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/90 text-white border border-slate-700 hover:bg-emerald-500 hover:text-slate-950 transition-all shadow-xl hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Sidebar Metadata & Caption */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  <div className="space-y-3 text-xs text-slate-400 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-semibold text-slate-200">
                        {item.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item.eventName}</span>
                    </div>
                    {item.photographer && (
                      <div className="text-slate-500 italic">
                        Photo credit: {item.photographer}
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                        <Tag className="w-3 h-3 text-emerald-400" /> Tags
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] bg-slate-800 text-slate-300 border border-slate-700/60 px-2.5 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-slate-800 text-xs text-slate-500 flex items-center justify-between">
                  <span>Use ← → keys to navigate</span>
                  <span>Esc to close</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
