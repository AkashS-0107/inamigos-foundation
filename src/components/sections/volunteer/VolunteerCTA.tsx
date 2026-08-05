import { volunteerCTAData } from "@/data/content/volunteer";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/animations/MotionWrappers";
import { VolunteerIcon } from "./VolunteerIcon";

interface VolunteerCTAProps {
  onOpenApplyModal: () => void;
}

export function VolunteerCTA({ onOpenApplyModal }: VolunteerCTAProps) {
  const { headline, subheadline, description, primaryCta, secondaryCta, tertiaryCta, stats } =
    volunteerCTAData;

  return (
    <section id="volunteer-cta" className="py-16 sm:py-24 relative overflow-hidden">
      <Container maxWidth="content">
        <RevealOnScroll>
          <GlassCard className="relative p-8 sm:p-14 bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-950 border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl text-center">
            {/* Background Ambient Glowing Orbs */}
            <div
              className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[130px]"
              role="presentation"
            />
            <div
              className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-[130px]"
              role="presentation"
            />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {/* Pill Subheadline */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
                <VolunteerIcon name="Sparkles" size={16} /> {subheadline}
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {headline}
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {description}
              </p>

              {/* 3 Buttons Grid / Flex */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={onOpenApplyModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm sm:text-base cursor-pointer"
                >
                  <VolunteerIcon name="HeartHandshake" size={20} />
                  {primaryCta.label}
                </button>

                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800/90 hover:bg-slate-800 text-slate-100 hover:text-white font-semibold rounded-xl border border-slate-700/80 hover:border-emerald-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm sm:text-base cursor-pointer"
                >
                  <VolunteerIcon name="Users" size={18} />
                  {secondaryCta.label}
                </a>

                {tertiaryCta && (
                  <a
                    href={tertiaryCta.href}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 hover:text-rose-200 font-semibold rounded-xl border border-rose-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm sm:text-base cursor-pointer"
                  >
                    <VolunteerIcon name="Target" size={18} />
                    {tertiaryCta.label}
                  </a>
                )}
              </div>

              {/* Stats Badges */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
                    <div className="text-xl sm:text-2xl font-bold text-emerald-400">{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
