import { SlideUp } from "@/components/animations";
import { Container, GlassCard } from "@/components/ui";
import { contactData } from "@/data/content/contact";
import { ArrowRight, Building2, HandHeart, Mail } from "@/lib/icons";
import { scrollToSection } from "@/utils";

export function ContactCTA() {
  const { cta } = contactData;

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") || href.startsWith("/")) {
      e.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    <section aria-labelledby="contact-cta-heading">
      <Container maxWidth="content">
        <SlideUp>
          <GlassCard className="relative overflow-hidden p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/40 border border-emerald-500/20 shadow-2xl text-center">
            {/* Background Ambient Glow Effects */}
            <div
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 right-0 w-80 h-80 bg-teal-500/20 rounded-full blur-[120px]"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2
                id="contact-cta-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight"
              >
                {cta.title}
              </h2>

              <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                {cta.description}
              </p>

              {/* 3 Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={cta.primaryButtonHref}
                  onClick={(e) => handleNav(e, cta.primaryButtonHref)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all duration-300 ds-focus"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>{cta.primaryButtonText}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={cta.secondaryButtonHref}
                  onClick={(e) => handleNav(e, cta.secondaryButtonHref)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base border border-slate-700 transition-all duration-300 ds-focus"
                >
                  <HandHeart className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>{cta.secondaryButtonText}</span>
                </a>

                <a
                  href={cta.tertiaryButtonHref}
                  onClick={(e) => handleNav(e, cta.tertiaryButtonHref)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 hover:text-teal-200 font-semibold text-sm sm:text-base border border-teal-500/30 transition-all duration-300 ds-focus"
                >
                  <Building2 className="w-4 h-4 text-teal-400" aria-hidden="true" />
                  <span>{cta.tertiaryButtonText}</span>
                </a>
              </div>
            </div>
          </GlassCard>
        </SlideUp>
      </Container>
    </section>
  );
}
