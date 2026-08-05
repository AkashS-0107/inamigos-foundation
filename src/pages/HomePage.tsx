import { AboutSection, Hero, ProjectsSection } from "@/components/sections";

/** Home route composition containing Hero, About & Mission, and Phase 8 Projects Showcase. */
export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
    </>
  );
}
