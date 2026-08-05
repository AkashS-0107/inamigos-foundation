import { useState, useCallback, memo } from "react";
import type { Category } from "@/types/projects";
import {
  featuredProjectData,
  impactHighlightsData,
  projectCategoriesData,
  projectCtaOptions,
  projectsData,
  projectsHeaderData,
  projectTimelineData,
} from "@/data/content/projects";
import { Container, Heading, Paragraph } from "@/components/ui";
import { ProjectCategories } from "./projects/ProjectCategories";
import { FeaturedProject } from "./projects/FeaturedProject";
import { ProjectsGrid } from "./projects/ProjectsGrid";
import { ProjectHighlights } from "./projects/ProjectHighlights";
import { ProjectTimeline } from "./projects/ProjectTimeline";
import { ProjectCTA } from "./projects/ProjectCTA";

export const ProjectsSection = memo(function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const handleSelectCategory = useCallback((category: Category) => {
    setActiveCategory(category);
  }, []);

  const handleResetCategory = useCallback(() => {
    setActiveCategory("All");
  }, []);

  return (
    <section
      id="projects"
      aria-labelledby="projects-section-title"
      className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-background via-white to-background dark:from-background dark:via-surface dark:to-background overflow-hidden scroll-mt-20"
    >
      {/* Background Ambient Blur Orbs */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 dark:bg-accent/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container maxWidth="content" className="relative z-10 space-y-12 sm:space-y-16">
        {/* 1. Projects Section Header */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 dark:bg-primary/20 text-primary dark:text-teal-300 border border-primary/20 dark:border-primary/30 shadow-sm">
            {projectsHeaderData.eyebrow}
          </span>

          <Heading
            level={2}
            id="projects-section-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            {projectsHeaderData.title}
          </Heading>

          <Paragraph className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {projectsHeaderData.description}
          </Paragraph>
        </header>

        {/* 2. Featured Project Showcase */}
        <FeaturedProject project={featuredProjectData} />

        {/* 3. Interactive Category Selector */}
        <ProjectCategories
          categories={projectCategoriesData}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* 4. Projects Grid */}
        <ProjectsGrid
          projects={projectsData}
          activeCategory={activeCategory}
          onResetCategory={handleResetCategory}
        />

        {/* 5. Impact Highlights Statistics */}
        <ProjectHighlights highlights={impactHighlightsData} />

        {/* 6. Impact Evolution Timeline */}
        <ProjectTimeline milestones={projectTimelineData} />

        {/* 7. Action Call To Action */}
        <ProjectCTA options={projectCtaOptions} />
      </Container>
    </section>
  );
});
