import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { volunteerTestimonialsData } from "@/data/content/volunteer";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/animations/MotionWrappers";
import { VolunteerIcon } from "./VolunteerIcon";

export function VolunteerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  const total = volunteerTestimonialsData.length;
  const current = volunteerTestimonialsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-advance carousel when playing
  useEffect(() => {
    if (!isPlaying || shouldReduceMotion) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, shouldReduceMotion]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === " ") {
      e.preventDefault();
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <section
      id="volunteer-testimonials"
      aria-labelledby="volunteer-testimonials-heading"
      className="py-16 sm:py-24 relative bg-slate-950/40 border-y border-slate-900"
    >
      <Container maxWidth="content">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <VolunteerIcon name="MessageSquare" size={14} /> Volunteer Voices
          </div>
          <h2 id="volunteer-testimonials-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stories from the <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Frontlines</span>
          </h2>
          <p className="text-slate-300 mt-3 text-base sm:text-lg">
            Hear from our passionate volunteers on how serving with InAmigos Foundation transformed their personal growth, leadership, and connection to society.
          </p>
        </div>

        {/* Carousel Container */}
        <RevealOnScroll>
          <div
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Volunteer Testimonials Slider"
            aria-live="polite"
            className="max-w-4xl mx-auto focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-3xl"
          >
            <GlassCard className="relative p-8 sm:p-12 bg-slate-900/80 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden min-h-[360px] flex flex-col justify-between">
              {/* Decorative Quote Icon Background */}
              <div className="absolute top-6 right-8 text-slate-800/40 pointer-events-none select-none text-9xl font-serif leading-none">
                “
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="relative z-10 space-y-6"
                >
                  {/* Rating Stars & Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: current.rating || 5 }).map((_, i) => (
                        <VolunteerIcon key={i} name="Star" size={18} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                        {current.impactHighlight}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
                        {current.tenure}
                      </span>
                    </div>
                  </div>

                  {/* Quote Body */}
                  <blockquote className="text-lg sm:text-xl md:text-2xl text-slate-100 font-medium leading-relaxed italic">
                    "{current.quote}"
                  </blockquote>

                  {/* Volunteer Profile Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                    <img
                      src={current.avatarUrl}
                      alt={current.name}
                      loading="lazy"
                      className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/40 shadow-md"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white">{current.name}</h3>
                      <p className="text-sm text-emerald-400 font-medium">{current.role}</p>
                      <p className="text-xs text-slate-400">{current.location}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls Bar */}
              <div className="relative z-10 mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                {/* Dot Pagination */}
                <div className="flex items-center gap-2">
                  {volunteerTestimonialsData.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? "w-8 bg-emerald-400" : "w-2.5 bg-slate-700 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>

                {/* Next / Prev / Pause Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPlaying((prev) => !prev)}
                    aria-label={isPlaying ? "Pause auto-rotation" : "Start auto-rotation"}
                    className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <VolunteerIcon name={isPlaying ? "Pause" : "Play"} size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <VolunteerIcon name="ChevronLeft" size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-md"
                  >
                    <VolunteerIcon name="ChevronRight" size={20} />
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
