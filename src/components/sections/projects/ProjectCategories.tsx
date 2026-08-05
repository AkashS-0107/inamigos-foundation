import { memo, useCallback, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FolderKanban,
  GraduationCap,
  HeartPulse,
  Leaf,
  Users,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Category, CategoryInfo } from "@/types/projects";
import { classNames } from "@/utils";

const categoryIconMap: Record<CategoryInfo["iconName"], LucideIcon> = {
  FolderKanban,
  GraduationCap,
  HeartPulse,
  Leaf,
  Users,
  Sparkles,
};

export interface ProjectCategoriesProps {
  categories: CategoryInfo[];
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export const ProjectCategories = memo(function ProjectCategories({
  categories,
  activeCategory,
  onSelectCategory,
}: ProjectCategoriesProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      let targetIndex = -1;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        targetIndex = (index + 1) % categories.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        targetIndex = (index - 1 + categories.length) % categories.length;
      } else if (event.key === "Home") {
        event.preventDefault();
        targetIndex = 0;
      } else if (event.key === "End") {
        event.preventDefault();
        targetIndex = categories.length - 1;
      }

      if (targetIndex >= 0) {
        const nextCategory = categories[targetIndex];
        onSelectCategory(nextCategory.id);
        const nextTab = document.getElementById(
          `tab-${nextCategory.id.toLowerCase().replace(/\s+/g, "-")}`
        );
        nextTab?.focus();
      }
    },
    [categories, onSelectCategory]
  );

  return (
    <nav aria-label="Filter projects by category" className="w-full my-6 sm:my-8">
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-7xl mx-auto px-2"
      >
        {categories.map((cat, index) => {
          const Icon = categoryIconMap[cat.iconName] || FolderKanban;
          const isActive = activeCategory === cat.id;
          const tabId = `tab-${cat.id.toLowerCase().replace(/\s+/g, "-")}`;

          return (
            <button
              key={cat.id}
              role="tab"
              id={tabId}
              aria-selected={isActive}
              aria-controls="projects-grid-container"
              aria-label={`Filter by ${cat.title} (${cat.count} ${cat.count === 1 ? "project" : "projects"})`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelectCategory(cat.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={classNames(
                "relative group flex flex-col items-center justify-between p-3.5 sm:p-4 min-h-[88px] sm:min-h-[96px] rounded-2xl transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 border text-center cursor-pointer select-none overflow-hidden",
                isActive
                  ? "bg-primary/10 dark:bg-primary/20 border-primary/30 text-primary dark:text-teal-300 shadow-md shadow-primary/10"
                  : "bg-white/80 dark:bg-slate-900/70 border-gray-200/90 dark:border-slate-800 text-gray-700 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/30 dark:hover:border-primary/40 shadow-sm"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 rounded-2xl border-2 border-primary dark:border-primary pointer-events-none"
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 380, damping: 32 }
                  }
                />
              )}

              <div
                className={classNames(
                  "p-2.5 rounded-xl transition-colors duration-300 flex items-center justify-center",
                  isActive
                    ? "bg-primary text-white shadow-sm shadow-primary/30"
                    : "bg-primary/5 dark:bg-primary/10 text-primary dark:text-teal-400 group-hover:bg-primary/10 dark:group-hover:bg-primary/20"
                )}
              >
                <Icon className="w-5 h-5" aria-hidden="true" role="presentation" />
              </div>

              <div className="flex flex-col items-center gap-0.5 mt-1">
                <span className="text-xs font-semibold tracking-wide capitalize line-clamp-1">
                  {cat.title}
                </span>

                <span
                  className={classNames(
                    "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium transition-colors",
                    isActive
                      ? "bg-primary/20 text-primary dark:text-teal-300"
                      : "bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-400"
                  )}
                >
                  {cat.count} {cat.count === 1 ? "Project" : "Projects"}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
});
