import { volunteerBenefitsData } from "@/data/content/volunteer";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { HoverGlow, HoverScale, RevealOnScroll, StaggerContainer } from "@/components/animations/MotionWrappers";
import { VolunteerIcon } from "./VolunteerIcon";

export function VolunteerBenefits() {
  return (
    <section
      id="volunteer-benefits"
      aria-labelledby="benefits-heading"
      className="py-16 sm:py-20 relative"
    >
      <Container maxWidth="content">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Empower Communities,{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Elevate Yourself
            </span>
          </h2>
          <p className="text-slate-300 mt-3 text-base sm:text-lg">
            Volunteering at InAmigos isn't just about giving back—it's a transformative journey where you build real-world leadership, gain verified recognition, and forge lifelong connections.
          </p>
        </div>

        {/* Benefit Cards Grid */}
        <StaggerContainer staggerChildren={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteerBenefitsData.map((benefit) => (
            <RevealOnScroll key={benefit.id}>
              <HoverScale scale={1.02}>
                <HoverGlow glow="0 10px 30px -10px rgba(16, 185, 129, 0.2)">
                  <GlassCard className="relative h-full p-6 sm:p-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
                    {/* Background Subtle Gradient Glow */}
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${
                        benefit.gradient || "from-emerald-500/10 to-transparent"
                      } opacity-40 group-hover:opacity-80 transition-opacity duration-300`}
                    />

                    <div className="relative z-10 space-y-4">
                      {/* Top Bar: Icon & Highlight Tag */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 text-emerald-400 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                          <VolunteerIcon name={benefit.icon} size={24} />
                        </div>
                        {benefit.highlightText && (
                          <span className="px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
                            {benefit.highlightText}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-slate-300 text-sm mt-2 leading-relaxed font-normal">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </HoverGlow>
              </HoverScale>
            </RevealOnScroll>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
