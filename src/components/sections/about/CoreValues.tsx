import { FadeIn, RevealOnScroll, StaggerContainer } from "@/components/animations";
import { coreValuesData, coreValuesHeader } from "@/data/content";
import { GraduationCap, Leaf, ShieldCheck, Users } from "@/lib/icons";

const iconMap = {
  Users,
  GraduationCap,
  ShieldCheck,
  Leaf,
} as const;

export function CoreValues() {
  return (
    <section className="about-values-wrapper" id="core-values" aria-labelledby="core-values-header-title">
      <RevealOnScroll>
        <header className="about-section-header">
          <h2 id="core-values-header-title" className="about-section-header__title">
            {coreValuesHeader.title}
          </h2>
          <p className="about-section-header__desc">{coreValuesHeader.description}</p>
        </header>
      </RevealOnScroll>

      <StaggerContainer className="about-values-grid">
        {coreValuesData.map((val) => {
          const Icon = iconMap[val.iconName];

          return (
            <FadeIn key={val.id}>
              <article className="about-value-card">
                <div className="about-value-card__icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="about-value-card__title">{val.title}</h3>
                <span className="about-value-card__subtitle">{val.subtitle}</span>
                <p className="about-value-card__desc">{val.description}</p>
              </article>
            </FadeIn>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
