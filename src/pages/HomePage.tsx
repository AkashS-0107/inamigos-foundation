import { AboutSection, GallerySection, Hero, ImpactSection, ProjectsSection, VolunteerSection } from "@/components/sections";

/** Home route composition containing Hero, About & Mission, Projects Showcase, Impact, Gallery, and Volunteer experience. */
export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ImpactSection />
      <GallerySection />
      <VolunteerSection />
    </>
  );
}



