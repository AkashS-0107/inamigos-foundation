import type { GalleryItem } from "@/types/gallery";
import { Calendar, MapPin, Maximize2 } from "lucide-react";

interface GalleryCardProps {
  item: GalleryItem;
  onExpand: (item: GalleryItem) => void;
}

export function GalleryCard({ item, onExpand }: GalleryCardProps) {
  return (
    <article
      onClick={() => onExpand(item)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onExpand(item);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View image: ${item.title} at ${item.location}`}
      className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/90 hover:border-emerald-500/50 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      {/* Aspect Ratio Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
        <img
          src={item.thumbnail || item.coverImage}
          alt={item.altText}
          loading={item.loadingStrategy || "lazy"}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="bg-slate-950/80 backdrop-blur-md text-emerald-400 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-500/30 uppercase tracking-wider shadow-md">
            {item.category}
          </span>
          <span className="bg-slate-900/80 hover:bg-emerald-500 hover:text-slate-950 text-white p-2 rounded-full border border-slate-700/60 backdrop-blur-md transition-all duration-300 transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 shadow-lg">
            <Maximize2 className="w-4 h-4" />
          </span>
        </div>

        {/* Bottom Content Container */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-300 mb-1.5 font-medium">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate max-w-[140px]">{item.location}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <Calendar className="w-3 h-3 shrink-0" />
              <span>{item.date}</span>
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
            {item.title}
          </h3>

          <p className="text-xs text-slate-400 mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
