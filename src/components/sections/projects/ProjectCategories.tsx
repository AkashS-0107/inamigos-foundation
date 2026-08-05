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
                "relative group flex flex-col items-center justify-between p-3.5 sm:p-4 min-h-[88px] sm:min-h-[96px] rounded-2xl transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 border text-center cursor-pointer select-none overflow-hidden",
                isActive
                  ? "bg-emerald-600/10 dark:bg-emerald-500/15 border-emerald-500/50 text-emerald-900 dark:text-emerald-300 shadow-md shadow-emerald-500/10"
                  : "bg-white/80 dark:bg-gray-800/70 border-gray-200/90 dark:border-gray-700/70 text-gray-700 dark:text-gray-300 hover:bg-emerald-50/60 dark:hover:bg-gray-800 hover:border-emerald-300/80 dark:hover:border-emerald-700/70 shadow-sm"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 rounded-2xl border-2 border-emerald-500 dark:border-emerald-400 pointer-events-none"
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
                    ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/30"
                    : "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/60"
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
                      ? "bg-emerald-500/20 text-emerald-800 dark:text-emerald-200"
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
