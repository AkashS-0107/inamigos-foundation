import { FadeIn, SlideUp } from "@/components/animations";
import { Container } from "@/components/ui";
import { contactData } from "@/data/content/contact";
import { Clock, Sparkles } from "@/lib/icons";

export function ContactHeader() {
  const { header } = contactData;

  return (
    <Container className="text-center max-w-4xl mx-auto mb-16">
      {/* Eyebrow Badge */}
      <SlideUp delay={0.1}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4 text-emerald-400" aria-hidden="true" />
          <span>{header.eyebrow}</span>
        </div>
      </SlideUp>

      {/* Main Section Title */}
      <SlideUp delay={0.2}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          {header.title}{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            {header.titleHighlight}
          </span>
        </h2>
      </SlideUp>

      {/* Supporting Paragraph */}
      <SlideUp delay={0.3}>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          {header.description}
        </p>
      </SlideUp>

      {/* SLA Badge */}
      <FadeIn delay={0.4}>
        <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-400">
          <Clock className="w-4 h-4 text-teal-400" aria-hidden="true" />
          <span>{header.badgeText}</span>
        </div>
      </FadeIn>
    </Container>
  );
}
