import { memo } from "react";
import { Link } from "react-router-dom";
import { HandHeart, Heart, Building2, Compass, ArrowRight, type LucideIcon } from "lucide-react";
import type { CTAOption } from "@/types/projects";
import { Button } from "@/components/ui";

const ctaIconMap: Record<CTAOption["iconName"], LucideIcon> = {
  HandHeart,
  Heart,
  Building2,
  Compass,
};

export interface ProjectCTAProps {
  options: CTAOption[];
}

export const ProjectCTA = memo(function ProjectCTA({ options }: ProjectCTAProps) {
  return (
    <section
      aria-labelledby="project-cta-heading"
      className="w-full max-w-7xl mx-auto my-12 sm:my-16 px-2"
    >
      <div className="relative rounded-3xl p-6 sm:p-10 bg-white/90 dark:bg-gray-900/90 border border-gray-200/80 dark:border-gray-800 shadow-xl backdrop-blur-xl overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3">
          <h3
            id="project-cta-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Take Action With InAmigos Foundation
          </h3>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Whether you want to volunteer on the ground, sponsor an initiative, or partner as an institution, your support transforms communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {options.map((option) => {
            const Icon = ctaIconMap[option.iconName] || HandHeart;

            return (
              <div
                key={option.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-gray-50/90 dark:bg-gray-800/60 border border-gray-200/70 dark:border-gray-700/60 hover:border-primary/40 dark:hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-primary text-white shadow-sm shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" aria-hidden="true" role="presentation" />
                    </div>

                    {option.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary/15 dark:bg-secondary/25 text-secondary dark:text-orange-300 border border-secondary/25 dark:border-secondary/35">
                        {option.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {option.title}
                  </h4>

                  <p className="text-xs font-semibold text-primary dark:text-teal-400 mb-2">
                    {option.subtitle}
                  </p>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {option.description}
                  </p>
                </div>

                <div>
                  <Link to={option.buttonLink} className="block w-full">
                    <Button
                      variant={option.variant}
                      size="sm"
                      endIcon={<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" role="presentation" />}
                      className="w-full justify-between rounded-xl group-hover:bg-primary group-hover:text-white focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-200"
                    >
                      {option.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
