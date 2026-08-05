import { RevealOnScroll } from "@/components/animations";
import { Badge, Button, Container, GlassCard, Heading } from "@/components/ui";
import type { FeaturedGalleryItem } from "@/types/gallery";
import { ArrowRight, Calendar, MapPin, Maximize2, ShieldCheck, Sparkles } from "lucide-react";

interface GalleryFeaturedProps {
  item: FeaturedGalleryItem;
  onExpand?: (item: FeaturedGalleryItem) => void;
}

export function GalleryFeatured({ item, onExpand }: GalleryFeaturedProps) {
  return (
    <Container className="mb-16 sm:mb-24 relative z-10">
      <RevealOnScroll>
        <div className="relative group">
          {/* Ambient Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-cyan-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

          <GlassCard className="relative p-6 sm:p-8 md:p-10 lg:p-12 border border-slate-800/80 bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Media Hero Side */}
              <div className="lg:col-span-7 relative group/img cursor-pointer overflow-hidden rounded-2xl border border-slate-700/60 shadow-lg bg-slate-950" onClick={() => onExpand?.(item)}>
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={item.coverImage}
                    alt={item.altText}
                    loading={item.loadingStrategy || "eager"}
                    className="w-full h-full object-cover object-center transform group-hover/img:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                    <Badge className="bg-emerald-500 text-slate-950 font-bold text-xs uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Featured Story
                    </Badge>
                    <Badge className="bg-slate-900/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30 text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Quick Expand Overlay Icon */}
                  <div className="absolute bottom-4 right-4 bg-slate-900/90 hover:bg-emerald-500 hover:text-slate-950 text-white p-3 rounded-full border border-slate-700/60 backdrop-blur-md transition-all duration-300 shadow-xl opacity-90 group-hover/img:scale-110">
                    <Maximize2 className="w-5 h-5" />
                    <span className="sr-only">Expand Featured Gallery Image</span>
                  </div>

                  {/* Bottom Image Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-16 z-10">
                    <p className="text-xs text-slate-300 font-medium truncate flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item.eventName}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Story Content Side */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-3 font-medium">
                  <span className="inline-flex items-center gap-1.5 bg-slate-800/60 text-emerald-300 px-3 py-1 rounded-full border border-slate-700/50">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {item.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-slate-800/60 text-slate-300 px-3 py-1 rounded-full border border-slate-700/50">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.date}
                  </span>
                </div>

                <Heading
                  level={3}
                  className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4 group-hover:text-emerald-300 transition-colors"
                >
                  {item.title}
                </Heading>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {item.campaignStory}
                </p>

                {/* Key Impact Stats inside Featured card */}
                {item.impactMetrics && item.impactMetrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    {item.impactMetrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-base sm:text-lg font-extrabold text-emerald-400">
                          {m.value}
                        </div>
                        <div className="text-[11px] sm:text-xs text-slate-400 truncate font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-slate-400 bg-slate-800/40 px-2.5 py-0.5 rounded-full border border-slate-700/40"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/25 flex items-center gap-2 group/btn"
                    onClick={() => onExpand?.(item)}
                  >
                    <span>View Story Photos</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Button>

                  {item.ctaLink && (
                    <a
                      href={item.ctaLink}
                      className="text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 flex items-center gap-1 transition-colors"
                    >
                      {item.ctaText || "Learn More"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </RevealOnScroll>
    </Container>
  );
}
