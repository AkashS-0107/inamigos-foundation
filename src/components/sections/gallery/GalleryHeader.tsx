import { RevealOnScroll } from "@/components/animations";
import { Container, Heading, Paragraph } from "@/components/ui";
import { Sparkles } from "lucide-react";

interface GalleryHeaderProps {
  title?: string;
  subtitle?: string;
}

export function GalleryHeader({
  title = "Moments of Transformation & Impact",
  subtitle = "Explore ground-level photographs capturing real smiles, community drives, tree plantations, and emergency relief missions by InAmigos Foundation.",
}: GalleryHeaderProps) {
  return (
    <Container className="text-center pt-8 pb-12 sm:pb-16 relative z-10">
      <RevealOnScroll>
        <Heading
          level={2}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]"
        >
          {title}{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent inline-flex items-center gap-1.5">
            in Action
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 inline-block animate-spin-slow" />
          </span>
        </Heading>

        <Paragraph className="mt-4 sm:mt-6 text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </Paragraph>
      </RevealOnScroll>
    </Container>
  );
}
