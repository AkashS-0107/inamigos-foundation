import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Globe,
  Newspaper,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { RecognitionItem } from "@/types/impact";

const RECOGNITION_ICON_MAP: Record<string, LucideIcon> = {
  Award,
  ShieldCheck,
  Newspaper,
  Globe,
};

interface RecognitionSectionProps {
  recognitionItems: RecognitionItem[];
}

export function RecognitionSection({ recognitionItems }: RecognitionSectionProps) {
  return (
    <section
      id="recognition"
      aria-labelledby="recognition-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2
            id="recognition-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Recognition &{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Our commitment to transparency, quality management, and measurable impact is endorsed by leading national awards, accredited certifications, and media features.
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recognitionItems.map((item, idx) => {
            const IconComponent = RECOGNITION_ICON_MAP[item.logo] || ShieldCheck;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md shadow-xl hover:border-emerald-500/40 hover:shadow-emerald-500/10 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    <span className="text-[11px] font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      {item.categoryBadge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-400 mb-3">
                    {item.issuedByOrOutlet} • {item.date}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.externalUrl && (
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Read Media Coverage</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Premium Partner Logo Strip */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 text-center backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Supported & Accredited By Trusted Organisations
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-sm sm:text-base font-extrabold text-slate-300 tracking-wider">
              MINISTRY OF YOUTH AFFAIRS
            </span>
            <span className="text-sm sm:text-base font-extrabold text-slate-300 tracking-wider">
              UNITED NATIONS SDG PARTNER
            </span>
            <span className="text-sm sm:text-base font-extrabold text-slate-300 tracking-wider">
              ISO 9001:2015 CERTIFIED
            </span>
            <span className="text-sm sm:text-base font-extrabold text-slate-300 tracking-wider">
              TIMES IMPACT FORUM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
