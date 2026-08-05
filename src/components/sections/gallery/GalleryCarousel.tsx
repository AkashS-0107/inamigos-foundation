import { useEffect, useRef, useState } from "react";
import { Badge, Container, Heading } from "@/components/ui";
import type { GalleryItem } from "@/types/gallery";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";

interface GalleryCarouselProps {
  items: GalleryItem[];
  onSelectImage: (item: GalleryItem) => void;
  autoPlayInterval?: number;
}

export function GalleryCarousel({
  items,
  onSelectImage,
  autoPlayInterval = 3500,
}: GalleryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll handler
  useEffect(() => {
    if (!isPlaying || isHovered || items.length === 0) return;

    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const cardWidth = 320; // approximate slide width

        if (scrollLeft + cardWidth >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, items.length, autoPlayInterval]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (items.length === 0) return null;

  return (
    <Container className="mb-16 relative z-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <Badge
            variant="outline"
            className="mb-2 text-xs text-amber-400 border-amber-500/30 bg-amber-500/10 px-3 py-0.5 rounded-full"
          >
            <Sparkles className="w-3 h-3 me-1 inline" /> HIGHLIGHT REEL
          </Badge>
          <Heading level={3} className="text-xl sm:text-2xl font-bold text-white">
            Moments in Motion
          </Heading>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            aria-label={isPlaying ? "Pause Auto-scroll" : "Play Auto-scroll"}
            className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Scroll Container */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        tabIndex={0}
        role="region"
        aria-label="Highlights image carousel"
      >
        {items.map((item) => (
          <div
            key={`carousel-${item.id}`}
            onClick={() => onSelectImage(item)}
            className="snap-start shrink-0 w-[280px] sm:w-[320px] rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 shadow-lg cursor-pointer group transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={item.thumbnail || item.coverImage}
                alt={item.altText}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                {item.category}
              </span>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-bold text-white truncate group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                {item.location} • {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
