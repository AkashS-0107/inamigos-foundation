import { RevealOnScroll } from "@/components/animations";
import { journeyTimelineData, journeyTimelineHeader } from "@/data/content";
import { Award, Building2, CheckCircle2, Compass, HeartHandshake, TrendingUp } from "@/lib/icons";

const iconMap = {
  Award,
  TrendingUp,
  HeartHandshake,
  Building2,
  Compass,
} as const;

export function JourneyTimeline() {
  return (
    <section className="about-journey-wrapper" id="our-journey" aria-labelledby="journey-header-title">
      <RevealOnScroll>
        <header className="about-section-header">
          <h2 id="journey-header-title" className="about-section-header__title">
            {journeyTimelineHeader.title}
          </h2>
          <p className="about-section-header__desc">{journeyTimelineHeader.description}</p>
        </header>
      </RevealOnScroll>

      <div className="about-timeline">
        {journeyTimelineData.map((item, index) => {
          const Icon = iconMap[item.iconName];
          const isOdd = index % 2 !== 0;

          return (
            <div
              key={item.year}
              className={`about-timeline-item ${isOdd ? "about-timeline-item--odd" : "about-timeline-item--even"}`}
            >
              <div className="about-timeline-node" aria-hidden="true" />
              <RevealOnScroll delay={0.1 * index} className="about-timeline-card-wrapper">
                <article className="about-timeline-card">
                  <header className="about-timeline-card__header">
                    <span className="about-timeline-card__year">{item.year}</span>
                    <span className="about-timeline-card__tag">
                      <Icon size={14} className="about-timeline-card__tag-icon" aria-hidden="true" />
                      {item.tag}
                    </span>
                  </header>
                  <h3 className="about-timeline-card__title">{item.title}</h3>
                  <h4 className="about-timeline-card__subtitle">{item.subtitle}</h4>
                  <p className="about-timeline-card__desc">{item.description}</p>
                  <footer className="about-timeline-card__achieved">
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>{item.keyAchieved}</span>
                  </footer>
                </article>
              </RevealOnScroll>
            </div>
          );
        })}
      </div>
    </section>
  );
}
