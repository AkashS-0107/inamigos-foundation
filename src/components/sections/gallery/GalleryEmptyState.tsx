import { Button, Container, GlassCard, Heading } from "@/components/ui";
import { ImageOff, RotateCcw } from "lucide-react";

interface GalleryEmptyStateProps {
  category: string;
  onReset: () => void;
}

export function GalleryEmptyState({
  category,
  onReset,
}: GalleryEmptyStateProps) {
  return (
    <Container className="mb-16 relative z-10">
      <GlassCard className="p-8 sm:p-12 text-center border border-slate-800 bg-slate-900/60 backdrop-blur-xl rounded-3xl max-w-2xl mx-auto shadow-2xl">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400">
          <ImageOff className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400/80 animate-bounce-slow" />
        </div>

        <Heading level={3} className="text-xl sm:text-2xl font-bold text-white mb-2">
          No Photographs Found in "{category}"
        </Heading>

        <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
          We couldn't find any gallery items matching this specific category right now. Try switching categories or reset your selection to view all NGO activities.
        </p>

        <Button
          variant="outline"
          size="md"
          onClick={onReset}
          className="border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 rounded-xl inline-flex items-center gap-2 font-semibold"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Filters to All</span>
        </Button>
      </GlassCard>
    </Container>
  );
}
