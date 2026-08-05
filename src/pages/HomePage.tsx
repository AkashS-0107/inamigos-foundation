import { AboutSection, GallerySection, Hero, ImpactSection, ProjectsSection } from "@/components/sections";

/** Home route composition containing Hero, About & Mission, Projects Showcase, Impact, and Gallery experience. */
export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ImpactSection />
      <GallerySection />
    </>
  );
}


