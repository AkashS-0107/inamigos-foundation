import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Rocket, TrendingUp, Globe, Users, Sparkles, CheckCircle2, Clock, Compass, type LucideIcon } from "lucide-react";
import type { TimelineMilestone } from "@/types/projects";
import { classNames } from "@/utils";

const timelineIconMap: Record<TimelineMilestone["iconName"], LucideIcon> = {
  Rocket,
  TrendingUp,
  Globe,
  Users,
  Sparkles,
};

const statusStyles: Record<TimelineMilestone["status"], { badge: string; icon: LucideIcon }> = {
  Completed: {
    badge: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    icon: CheckCircle2,
  },
  Ongoing: {
    badge: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    icon: Clock,
  },
  Upcoming: {
    badge: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    icon: Compass,
  },
};

export interface ProjectTimelineProps {
  milestones: TimelineMilestone[];
}

export const ProjectTimeline = memo(function ProjectTimeline({ milestones }: ProjectTimelineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="project-timeline-heading"
      className="w-full max-w-7xl mx-auto my-12 sm:my-16 px-2"
    >
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 dark:bg-primary/20 text-primary dark:text-teal-300 border border-primary/20 dark:border-primary/30">
          Evolution & Growth
        </span>
        <h3
          id="project-timeline-heading"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Our Growth & Milestones Journey
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Tracing how small emergency relief efforts evolved into a nationwide network of sustainable community projects.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Connector Line */}
        <div
          className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -ml-0.5 bg-gradient-to-b from-primary via-primary/60 to-secondary/35 dark:from-primary dark:via-primary/50 dark:to-secondary/20"
          aria-hidden="true"
        />

        <ol className="relative space-y-8 sm:space-y-12">
          {milestones.map((item, idx) => {
            const Icon = timelineIconMap[item.iconName] || Rocket;
            const StatusIcon = statusStyles[item.status].icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.li
                key={item.id}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, x: isEven ? -24 : 24, y: 16 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.5, delay: idx * 0.1 }
                }
                className={classNames(
                  "relative flex flex-col sm:flex-row items-start",
                  isEven ? "sm:flex-row-reverse" : ""
                )}
              >
                {/* Timeline Node Marker */}
                <div className="absolute left-4 sm:left-1/2 -ml-5 sm:-ml-5 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-lg shadow-primary/30 ring-4 ring-white dark:ring-gray-900 z-10">
                  <Icon className="w-5 h-5" aria-hidden="true" role="presentation" />
                </div>

                {/* Milestone Content Card */}
                <div
                  className={classNames(
                    "ml-12 sm:ml-0 sm:w-1/2 p-1 sm:p-0",
                    isEven ? "sm:pr-10 sm:text-right" : "sm:pl-10"
                  )}
                >
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800 shadow-md hover:shadow-lg backdrop-blur-md transition-all duration-300">
                    <div
                      className={classNames(
                        "flex flex-wrap items-center gap-2 mb-2",
                        isEven ? "sm:justify-end" : "justify-start"
                      )}
                    >
                      <span className="text-xs font-bold text-primary dark:text-teal-300">
                        {item.year}
                      </span>
                      <span className="text-gray-300 dark:text-gray-600" aria-hidden="true">•</span>
                      <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                        {item.phase}
                      </span>
                      <span
                        className={classNames(
                          "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ml-auto sm:ml-0",
                          statusStyles[item.status].badge
                        )}
                      >
                        <StatusIcon className="w-3 h-3" aria-hidden="true" role="presentation" />
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>

                    <p className="text-xs font-semibold text-primary dark:text-teal-400 mt-0.5">
                      {item.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div
                      className={classNames(
                        "mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 text-xs font-semibold text-gray-900 dark:text-white",
                        isEven ? "sm:justify-end" : "justify-start"
                      )}
                    >
                      <span className="px-2.5 py-1 rounded-lg bg-primary/5 dark:bg-primary/10 text-primary dark:text-teal-300 border border-primary/15 dark:border-primary/20">
                        Key Impact: {item.impactMetric}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
});
