import { FadeIn, RevealOnScroll } from "@/components/animations";
import { GlassCard } from "@/components/ui";
import { missionVisionData, missionVisionHeader } from "@/data/content";
import { Check, Eye, Target } from "@/lib/icons";

export function MissionVision() {
  return (
    <section className="about-mv-wrapper" id="mission-vision" aria-labelledby="mission-vision-header-title">
      <RevealOnScroll>
        <header className="about-section-header">
          <h2 id="mission-vision-header-title" className="about-section-header__title">
            {missionVisionHeader.title}
          </h2>
          <p className="about-section-header__desc">{missionVisionHeader.description}</p>
        </header>
      </RevealOnScroll>

      <div className="about-mv-grid">
        {missionVisionData.map((item, index) => {
          const isMission = item.id === "mission";
          const Icon = isMission ? Target : Eye;
          const iconBoxClass = isMission ? "about-mv-card__icon-box--emerald" : "about-mv-card__icon-box--amber";

          return (
            <FadeIn key={item.id} delay={0.1 * index}>
              <GlassCard className="about-mv-card">
                <article className="about-mv-card__content">
                  <header className="about-mv-card__header">
                    <span className="about-story__eyebrow about-mv-card__badge">
                      {item.badge}
                    </span>
                    <div className={`about-mv-card__icon-box ${iconBoxClass}`}>
                      <Icon size={24} aria-hidden="true" />
                    </div>
                  </header>

                  <h3 className="about-mv-card__title">{item.title}</h3>
                  <h4 className="about-mv-card__subtitle">{item.subtitle}</h4>
                  <p className="about-mv-card__desc">{item.description}</p>

                  <ul className="about-mv-card__list">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="about-mv-card__item">
                        <span className="about-mv-card__check">
                          <Check size={14} aria-hidden="true" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </GlassCard>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
