import { memo, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, MapPin, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import type { FeaturedProject as FeaturedProjectType } from "@/types/projects";
import { Button } from "@/components/ui";

export interface FeaturedProjectProps {
  project: FeaturedProjectType;
}

export const FeaturedProject = memo(function FeaturedProject({ project }: FeaturedProjectProps) {
  const [imgSrc, setImgSrc] = useState(project.image.coverImage);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = useCallback(() => {
    setImgSrc(project.image.fallbackImage);
  }, [project.image.fallbackImage]);

  return (
    <article
      aria-labelledby="featured-project-heading"
      className="w-full max-w-7xl mx-auto my-8 sm:my-12 px-2"
    >
      <div className="relative rounded-3xl overflow-hidden bg-white/90 dark:bg-gray-900/90 border border-gray-200/80 dark:border-gray-800 shadow-xl shadow-gray-950/5 backdrop-blur-xl transition-all duration-300">
        {/* Organic Subtle Ambient Background Orbs */}
        <div
          className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-amber-500/10 dark:bg-amber-500/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
          {/* Visual Showcase Media */}
          <div className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:h-[480px] rounded-2xl overflow-hidden group bg-gray-100 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 shadow-md">
            {/* Blur Placeholder */}
            {!isLoaded && (
              <div
                className="absolute inset-0 bg-cover bg-center blur-md scale-105 transition-opacity duration-500"
                style={{ backgroundImage: `url(${project.image.placeholderImage})` }}
                aria-hidden="true"
              />
            )}

            <img
              src={imgSrc}
              alt={project.image.altText}
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              onError={handleError}
              className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Gradient Dark Overlay for contrast */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/20 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" role="presentation" />
                Featured Flagship
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" role="presentation" />
                {project.verifiedBadge}
              </span>
            </div>

            {/* Location Pill */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-gray-950/85 backdrop-blur-md text-gray-200 border border-gray-800 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" role="presentation" />
                {project.location}
              </span>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase mb-2">
                <span>{project.category}</span>
                <span aria-hidden="true">•</span>
                <span>Started {project.startDate}</span>
              </div>

              <h3
                id="featured-project-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
              >
                {project.title}
              </h3>

              <p className="mt-2 text-sm sm:text-base font-semibold text-emerald-700 dark:text-emerald-300">
                {project.subtitle}
              </p>

              <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-prose">
                {project.story}
              </p>
            </div>

            {/* Key Achievements Checklist */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Key Accomplishments
              </h4>
              <ul className="space-y-2" aria-label="Key accomplishments list">
                {project.keyAchievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2
                      className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                      role="presentation"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-gray-50/90 dark:bg-gray-800/60 border border-gray-200/70 dark:border-gray-700/60 text-center"
                >
                  <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <Link to={project.ctaLink} className="inline-block">
                <Button
                  variant="primary"
                  size="lg"
                  endIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" role="presentation" />}
                  className="rounded-xl shadow-md shadow-emerald-600/20 focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  {project.ctaLabel}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});
