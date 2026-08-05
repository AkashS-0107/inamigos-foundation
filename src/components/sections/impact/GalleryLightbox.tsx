import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Play,
  Tag,
  UserCheck,
  X,
} from "lucide-react";
import type { GalleryItem } from "@/types/impact";

interface GalleryLightboxProps {
  isOpen: boolean;
  activeItem: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
}

export function GalleryLightbox({
  isOpen,
  activeItem,
  items,
  onClose,
  onSelectNext,
  onSelectPrev,
}: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen || !activeItem) return;

    // Lock background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onSelectNext();
      } else if (e.key === "ArrowLeft") {
        onSelectPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeItem, onClose, onSelectNext, onSelectPrev]);

  if (!isOpen || !activeItem) return null;

  const currentIndex = items.findIndex((i) => i.id === activeItem.id);
  const totalCount = items.length;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10"
        role="dialog"
        aria-modal="true"
        aria-label={`Media detail for ${activeItem.title}`}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md"
        />

        {/* Dialog Content Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border border-emerald-500/30 bg-slate-900 shadow-2xl flex flex-col lg:flex-row"
        >
          {/* Close Button top right */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/70 border border-slate-700 text-slate-300 hover:bg-emerald-500 hover:text-slate-950 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Previous / Next Arrow Controls */}
          {totalCount > 1 && (
            <>
              <button
                onClick={onSelectPrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/70 border border-slate-700 text-slate-300 hover:bg-emerald-500 hover:text-slate-950 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={onSelectNext}
                aria-label="Next image"
                className="absolute right-16 top-4 sm:top-1/2 sm:right-4 sm:-translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/70 border border-slate-700 text-slate-300 hover:bg-emerald-500 hover:text-slate-950 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Media View Container */}
          <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[420px] lg:min-h-[500px]">
            {activeItem.type === "video" ? (
              <div className="relative w-full h-full flex items-center justify-center group">
                <img
                  src={activeItem.thumbnail || activeItem.src}
                  alt={activeItem.title}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex flex-col items-center justify-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 fill-slate-950 ml-1" />
                  </div>
                  <span className="text-xs font-semibold bg-slate-900/90 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                    Video Showcase • {activeItem.videoDuration || "03:00"}
                  </span>
                </div>
              </div>
            ) : (
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            )}
          </div>

          {/* Metadata Sidebar / Bottom Panel */}
          <div className="w-full lg:w-[380px] p-6 sm:p-8 bg-slate-900 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-slate-800">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400">
                  {activeItem.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {currentIndex + 1} / {totalCount}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {activeItem.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeItem.description}
              </p>

              {/* Date & Location */}
              <div className="space-y-2 mb-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-emerald-400" />
                  <span>{activeItem.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  <span>{activeItem.location}</span>
                </div>
                {activeItem.photographerOrCredit && (
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-emerald-400" />
                    <span>Credit: {activeItem.photographerOrCredit}</span>
                  </div>
                )}
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {activeItem.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 bg-slate-800 text-slate-300 text-[11px] px-2.5 py-1 rounded-md"
                  >
                    <Tag className="h-3 w-3 text-emerald-400" />
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Lightbox Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Use ← → keys to navigate</span>
              <button
                onClick={onClose}
                className="text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                Close View
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
