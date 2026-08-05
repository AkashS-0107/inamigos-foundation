import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Quote, Sparkles } from "lucide-react";
import type { ImpactStoryData } from "@/types/impact";

interface ImpactStoryProps {
  story: ImpactStoryData;
}

export function ImpactStory({ story }: ImpactStoryProps) {
  return (
    <section
      id="impact-story"
      aria-labelledby="impact-story-heading"
      className="relative py-16 sm:py-24 overflow-hidden"
    >
      {/* Background ambient lighting glows */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Tagline */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            {story.tagline}
          </span>
        </div>

        {/* Large Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Media & Quote overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-2xl group">
              <img
                src={story.image}
                alt={story.imageAlt}
                className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Badge Tag top right */}
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md border border-secondary/40 text-secondary text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                {story.badgeText}
              </div>

              {/* Featured Quote Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-primary/30 shadow-2xl">
                <Quote className="h-7 w-7 text-secondary/60 mb-2" />
                <p className="text-sm sm:text-base italic text-slate-100 font-medium leading-relaxed">
                  "{story.quote.text}"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={story.quote.avatar}
                    alt={story.quote.author}
                    className="h-10 w-10 rounded-full object-cover border-2 border-secondary"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {story.quote.author}
                    </h4>
                    <p className="text-xs text-teal-300">
                      {story.quote.role} • {story.quote.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Story & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2
              id="impact-story-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight"
            >
              {story.title}
            </h2>

            <p className="mt-4 text-lg font-medium text-secondary">
              {story.subtitle}
            </p>

            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              {story.storyParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Highlights Metric Pills */}
            <div className="mt-8 grid grid-cols-3 gap-3 pt-6 border-t border-slate-800">
              {story.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-900/60 border border-primary/20 p-3 text-center"
                >
                  <p className="text-xs text-slate-400 font-medium">{metric.label}</p>
                  <p className="text-sm sm:text-base font-bold text-secondary mt-1">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={story.cta.primaryHref}
                className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-teal-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <HeartHandshake className="h-4 w-4" />
                {story.cta.primaryText}
              </a>

              <a
                href={story.cta.secondaryHref}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:border-secondary hover:text-secondary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                {story.cta.secondaryText}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
