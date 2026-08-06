import { scrollToSection } from "@/utils";
import { volunteerHeaderData } from "@/data/content/volunteer";
import { Container } from "@/components/ui/Container";
import { FadeIn, SlideUp, StaggerContainer } from "@/components/animations/MotionWrappers";
import { VolunteerIcon } from "./VolunteerIcon";

interface VolunteerHeaderProps {
  onOpenApplyModal: () => void;
}

export function VolunteerHeader({ onOpenApplyModal }: VolunteerHeaderProps) {
  const {
    title,
    titleHighlight,
    description,
    primaryCta,
    secondaryCta,
    badgeText,
    quickStats,
  } = volunteerHeaderData;

  const handleSecondaryClick = () => {
    scrollToSection(secondaryCta.href);
  };

  return (
    <header className="relative pt-6 pb-12 sm:pb-16 text-center">
      <Container maxWidth="content">
        <StaggerContainer staggerChildren={0.1} className="max-w-4xl mx-auto space-y-6">
          {/* Large Heading */}
          <SlideUp>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              {title}{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {titleHighlight}
              </span>
            </h1>
          </SlideUp>

          {/* Supporting Paragraph */}
          <SlideUp>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              {description}
            </p>
          </SlideUp>

          {/* CTAs */}
          <SlideUp>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onOpenApplyModal}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm sm:text-base cursor-pointer"
              >
                <VolunteerIcon name="HeartHandshake" size={20} />
                {primaryCta.label}
              </button>

              <button
                type="button"
                onClick={handleSecondaryClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold rounded-xl border border-slate-700/80 hover:border-emerald-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm sm:text-base cursor-pointer"
              >
                <VolunteerIcon name="BookOpen" size={18} />
                {secondaryCta.label}
              </button>
            </div>
          </SlideUp>

          {/* ISO Verified Badge */}
          <FadeIn delay={0.3}>
            <div className="inline-flex items-center gap-2 pt-2 text-xs text-slate-400">
              <VolunteerIcon name="ShieldCheck" size={16} className="text-emerald-400" />
              <span>{badgeText}</span>
            </div>
          </FadeIn>

          {/* Quick Stats Grid */}
          <SlideUp>
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-center transition-all hover:border-emerald-500/30"
                >
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </SlideUp>
        </StaggerContainer>
      </Container>
    </header>
  );
}
