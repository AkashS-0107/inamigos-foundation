import { memo, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "@/types/projects";
import { classNames } from "@/utils";
import { Button } from "@/components/ui";

export interface ProjectCardProps {
  project: Project;
}

const statusBadgeStyles: Record<Project["status"], string> = {
  Featured: "bg-emerald-600 text-white shadow-emerald-600/20",
  Active: "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800",
  Ongoing: "bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-800",
  Upcoming: "bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800",
  Completed: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700",
};

export const ProjectCard = memo(function ProjectCard({ project }: ProjectCardProps) {
  const [imgSrc, setImgSrc] = useState(project.image.coverImage);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = useCallback(() => {
    setImgSrc(project.image.fallbackImage);
  }, [project.image.fallbackImage]);

  return (
    <article className="group relative flex flex-col h-full rounded-2xl bg-white/90 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-md overflow-hidden">
      {/* Cover Image aspect ratio container to prevent layout shift */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
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

        {/* Gradient Contrast Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Category & Status Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-gray-950/80 backdrop-blur-md text-white border border-white/20 shadow-sm">
            {project.category}
          </span>

          <span
            className={classNames(
              "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border shadow-sm",
              statusBadgeStyles[project.status]
            )}
          >
            {project.status}
          </span>
        </div>

        {/* Location Badge */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-gray-950/85 backdrop-blur-md text-gray-200 border border-gray-800 shadow-sm">
            <MapPin className="w-3 h-3 text-emerald-400 shrink-0" aria-hidden="true" role="presentation" />
            {project.location}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-col flex-1 p-5 justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 dark:border-gray-800/80">
          {project.metrics.slice(0, 3).map((metric, idx) => (
            <div key={idx} className="p-2 rounded-lg bg-gray-50/90 dark:bg-gray-800/50 text-center">
              <div className="text-xs font-bold text-gray-900 dark:text-white line-clamp-1">
                {metric.value}
              </div>
              <div className="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link Action */}
        <div className="pt-2">
          <Link to={project.ctaLink} className="block w-full">
            <Button
              variant="outline"
              size="sm"
              endIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" role="presentation" />}
              className="w-full justify-between rounded-xl group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {project.ctaLabel}
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
});
