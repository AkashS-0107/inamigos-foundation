import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { volunteerFAQsData } from "@/data/content/volunteer";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll, StaggerContainer } from "@/components/animations/MotionWrappers";
import { VolunteerIcon } from "./VolunteerIcon";

export function VolunteerFAQ() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(volunteerFAQsData[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="volunteer-faq"
      aria-labelledby="volunteer-faq-heading"
      className="py-16 sm:py-24 relative"
    >
      <Container maxWidth="content">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <VolunteerIcon name="HelpCircle" size={14} /> Got Questions?
          </div>
          <h2 id="volunteer-faq-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-slate-300 mt-3 text-base sm:text-lg">
            Everything you need to know about joining, time commitment, training, and certification with InAmigos Foundation.
          </p>
        </div>

        {/* Accordion Stack */}
        <StaggerContainer staggerChildren={0.06} className="max-w-3xl mx-auto space-y-4">
          {volunteerFAQsData.map((faq) => {
            const isOpen = openFaqId === faq.id;
            const buttonId = `faq-btn-${faq.id}`;
            const contentId = `faq-content-${faq.id}`;

            return (
              <RevealOnScroll key={faq.id}>
                <GlassCard
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-950/30"
                      : "bg-slate-900/60 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-2xl cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" aria-hidden="true" />
                      {faq.question}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-emerald-500/20 text-emerald-400 rotate-180" : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      <VolunteerIcon name="ChevronDown" size={18} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </RevealOnScroll>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
