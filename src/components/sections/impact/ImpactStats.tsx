import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  MapPin,
  Megaphone,
  Trees,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import type { ImpactStat } from "@/types/impact";

const ICON_MAP: Record<string, LucideIcon> = {
  MapPin,
  Users,
  HeartPulse,
  Trees,
  Megaphone,
  GraduationCap,
};

interface ImpactStatCardProps {
  stat: ImpactStat;
  index: number;
}

function ImpactStatCard({ stat, index }: ImpactStatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const animatedValue = useAnimatedCounter({
    targetValue: stat.value,
    durationMs: 2200,
    shouldStart: isInView,
  });

  const IconComponent = ICON_MAP[stat.iconName] || Users;
  const formattedDisplay = `${stat.prefix || ""}${animatedValue.toLocaleString()}${stat.suffix || ""}`;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-emerald-950/20 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
    >
      {/* Background ambient radial gradient */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />

      <div>
        {/* Card Header: Icon & Verified Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
            <IconComponent className="h-6 w-6" aria-hidden="true" />
          </div>

          {stat.isVerified ? (
            <span
              className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300"
              title={stat.verificationSource || "Verified by annual audit"}
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              Verified Data
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-300">
              Estimated Goal
            </span>
          )}
        </div>

        {/* Counter Value */}
        <div className="mt-2 flex items-baseline">
          <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            {formattedDisplay}
          </span>
        </div>

        {/* Label */}
        <h3 className="mt-2 text-lg font-bold text-emerald-100 group-hover:text-emerald-300 transition-colors">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          {stat.description}
        </p>
      </div>

      {/* Footer Audit Source */}
      {stat.verificationSource && (
        <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span className="truncate">Source: {stat.verificationSource}</span>
        </div>
      )}
    </motion.div>
  );
}

interface ImpactStatsProps {
  stats: ImpactStat[];
}

export function ImpactStats({ stats }: ImpactStatsProps) {
  return (
    <section
      id="impact-statistics"
      aria-labelledby="impact-stats-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
            Measurable Outcomes
          </span>
          <h2
            id="impact-stats-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Real Numbers Behind Our{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every counter below represents verified, tangible change brought to life by dedicated volunteers, generous donors, and resilient communities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <ImpactStatCard key={stat.id} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
