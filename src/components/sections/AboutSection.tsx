import { Container, Section } from "@/components/ui";
import { AboutStory } from "./about/AboutStory";
import { CoreValues } from "./about/CoreValues";
import { JourneyTimeline } from "./about/JourneyTimeline";
import { MissionVision } from "./about/MissionVision";
import { WhyChooseUs } from "./about/WhyChooseUs";

/**
 * Phase 7 - About & Mission Section for InAmigos Foundation.
 * Answers Who we are, What we do, Why we exist, and How we create impact.
 */
export function AboutSection() {
  return (
    <Section className="about-section" id="about" aria-labelledby="about-heading">
      {/* Background Ambient Glow Elements */}
      <div className="about__ambient about__ambient--emerald" aria-hidden="true" />
      <div className="about__ambient about__ambient--amber" aria-hidden="true" />
      <div className="about__ambient about__ambient--teal" aria-hidden="true" />

      <Container maxWidth="content">
        {/* Section Title Screen-Reader Heading */}
        <h2 id="about-heading" className="sr-only">
          About InAmigos Foundation, Mission, Values & Journey
        </h2>

        {/* 1. About Story */}
        <AboutStory />

        {/* 2. Mission & Vision */}
        <MissionVision />

        {/* 3. Core Values */}
        <CoreValues />

        {/* 4. Our Journey Timeline */}
        <JourneyTimeline />

        {/* 5. Why Choose InAmigos Feature Grid */}
        <WhyChooseUs />
      </Container>
    </Section>
  );
}
