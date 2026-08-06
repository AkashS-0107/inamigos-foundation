import { memo, useEffect, useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Building2, Users, HeartHandshake, Award, type LucideIcon } from "lucide-react";
import type { ImpactHighlight } from "@/types/projects";

const highlightIconMap: Record<ImpactHighlight["iconName"], LucideIcon> = {
  Building2,
  Users,
  HeartHandshake,
  Award,
};

export interface ProjectHighlightsProps {
  highlights: ImpactHighlight[];
}

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    if (isInView) {
      let start = 0;
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, shouldReduceMotion]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export const ProjectHighlights = memo(function ProjectHighlights({ highlights }: ProjectHighlightsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="impact-highlights-heading"
      className="w-full max-w-7xl mx-auto my-12 sm:my-16 px-2"
    >
      <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-teal-950 via-teal-900 to-teal-950 text-white shadow-2xl overflow-hidden border border-primary/25">
        {/* Ambient Blur Orbs */}
        <div
          className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h3
            id="impact-highlights-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white"
          >
            Measurable Footprint Across India
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Real outcomes driven by community trust, volunteer dedication, and transparent non-profit operations.
          </p>
        </div>

        <ul className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {highlights.map((item, idx) => {
            const Icon = highlightIconMap[item.iconName] || Building2;

            return (
              <motion.li
                key={item.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.4, delay: idx * 0.1 }
                }
                className="flex flex-col items-center p-6 rounded-2xl bg-white/10 dark:bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300 text-center group"
              >
                <div className="p-3 rounded-2xl bg-secondary/20 text-secondary border border-secondary/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" aria-hidden="true" role="presentation" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                  <AnimatedCounter
                    value={item.value}
                    suffix={item.suffix}
                    prefix={item.prefix}
                  />
                </div>

                <h4 className="text-sm font-semibold text-teal-200 mb-2">
                  {item.label}
                </h4>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
});
