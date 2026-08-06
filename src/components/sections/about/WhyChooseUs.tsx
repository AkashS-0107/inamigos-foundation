import { FadeIn, RevealOnScroll, StaggerContainer } from "@/components/animations";
import { whyChooseUsData, whyChooseUsHeader } from "@/data/content";
import { HeartHandshake, Leaf, Scale, ShieldCheck, Users } from "@/lib/icons";

const iconMap = {
  ShieldCheck,
  HeartHandshake,
  Leaf,
  Users,
  Scale,
} as const;

export function WhyChooseUs() {
  return (
    <section className="about-why-wrapper" id="why-inamigos" aria-labelledby="why-header-title">
      <RevealOnScroll>
        <header className="about-section-header">
          <h2 id="why-header-title" className="about-section-header__title">
            {whyChooseUsHeader.title}
          </h2>
          <p className="about-section-header__desc">{whyChooseUsHeader.description}</p>
        </header>
      </RevealOnScroll>

      <StaggerContainer className="about-why-grid">
        {whyChooseUsData.map((item) => {
          const Icon = iconMap[item.iconName];

          return (
            <FadeIn key={item.id}>
              <article className="about-why-card">
                <header className="about-why-card__top">
                  <div className="about-why-card__icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  {item.statBadge && <span className="about-why-card__badge">{item.statBadge}</span>}
                </header>
                <h3 className="about-why-card__title">{item.title}</h3>
                <p className="about-why-card__desc">{item.description}</p>
              </article>
            </FadeIn>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
