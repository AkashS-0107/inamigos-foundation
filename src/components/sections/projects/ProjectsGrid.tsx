import { memo, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FolderKanban, RotateCcw } from "lucide-react";
import type { Category, Project } from "@/types/projects";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui";

export interface ProjectsGridProps {
  projects: Project[];
  activeCategory: Category;
  onResetCategory?: () => void;
}

export const ProjectsGrid = memo(function ProjectsGrid({
  projects,
  activeCategory,
  onResetCategory,
}: ProjectsGridProps) {
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <section
      id="projects-grid-container"
      aria-live="polite"
      aria-label={`Projects grid showing ${filteredProjects.length} ${filteredProjects.length === 1 ? "project" : "projects"}`}
      className="w-full max-w-7xl mx-auto my-6 sm:my-8 px-2 min-h-[360px]"
    >
      <AnimatePresence mode="popLayout">
        {filteredProjects.length > 0 ? (
          <motion.div
            layout={!shouldReduceMotion}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout={!shouldReduceMotion}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -16 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.3, ease: "easeOut" }
                }
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty-state"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-3xl bg-white/70 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 backdrop-blur-lg shadow-sm"
          >
            <div className="p-4 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mb-4 border border-emerald-200 dark:border-emerald-800">
              <FolderKanban className="w-8 h-8" aria-hidden="true" role="presentation" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              No Projects Found in "{activeCategory}"
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mb-6 leading-relaxed">
              We currently don't have active projects listed under this specific category filter. Explore our other sectors or reset filters to view all initiatives.
            </p>

            {onResetCategory && (
              <Button
                variant="primary"
                size="md"
                onClick={onResetCategory}
                startIcon={<RotateCcw className="w-4 h-4" aria-hidden="true" role="presentation" />}
                className="rounded-xl shadow-md focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Reset All Filters
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});
