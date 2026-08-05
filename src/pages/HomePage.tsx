import { AboutSection, Hero, ImpactSection, ProjectsSection } from "@/components/sections";

/** Home route composition containing Hero, About & Mission, Projects Showcase, and Impact & Gallery experience. */
export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ImpactSection />
    </>
  );
}

