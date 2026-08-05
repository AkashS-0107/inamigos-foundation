import { Link } from "react-router-dom";
import { FadeIn, HoverScale, SlideUp } from "@/components/animations";
import { aboutStoryData } from "@/data/content";
import { ArrowRight, HeartHandshake, Sparkles } from "@/lib/icons";

export function AboutStory() {
  const { visualCard } = aboutStoryData;

  return (
    <article className="about-story" id="about-story" aria-labelledby="about-story-title">
      {/* Left Column: Narrative Copy */}
      <div className="about-story__content">
        <FadeIn delay={0.05}>
          <span className="about-story__eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            {aboutStoryData.eyebrow}
          </span>
        </FadeIn>

        <SlideUp delay={0.15}>
          <h2 id="about-story-title" className="about-story__headline">
            {aboutStoryData.headlinePrefix}{" "}
            <span className="about-story__headline-accent">{aboutStoryData.headlineAccent}</span>
            {aboutStoryData.headlineSuffix}
          </h2>
        </SlideUp>

        <SlideUp delay={0.25}>
          <div className="about-story__paragraphs">
            {aboutStoryData.storyParagraphs.map((paragraph, index) => (
              <p key={index} className="about-story__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </SlideUp>

        <SlideUp delay={0.35} className="about-story__actions">
          <HoverScale scale={1.03}>
            <Link className="ds-button ds-button--primary ds-focus" to={aboutStoryData.ctaPath}>
              {aboutStoryData.ctaText}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </HoverScale>
          <HoverScale scale={1.03}>
            <a className="ds-button ds-button--outline ds-focus" href={aboutStoryData.secondaryCtaHref}>
              <HeartHandshake size={18} aria-hidden="true" />
              {aboutStoryData.secondaryCtaText}
            </a>
          </HoverScale>
        </SlideUp>
      </div>

      {/* Right Column: Visual Feature Card */}
      <SlideUp delay={0.25} className="about-story__visual-wrapper">
        <div className="about-story__visual-card">
          <header className="about-story__card-header">
            <span className="about-story__eyebrow about-story__eyebrow--card">
              {visualCard.eyebrow}
            </span>
            <h3 className="about-story__card-title">
              {visualCard.title}
            </h3>
            <p className="about-story__card-desc">
              {visualCard.description}
            </p>
          </header>

          <div className="about-story__badge-grid">
            {visualCard.miniStats.map((stat, idx) => (
              <div key={idx} className="about-story__mini-stat">
                <span className="about-story__mini-stat-val">{stat.value}</span>
                <span className="about-story__mini-stat-lbl">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </SlideUp>
    </article>
  );
}
