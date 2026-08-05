import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn, SlideUp } from "@/components/animations";
import { Container, GlassCard } from "@/components/ui";
import { contactData } from "@/data/content/contact";
import type { FAQ } from "@/types/contact";
import { ChevronDown, CircleHelp } from "@/lib/icons";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-volunteer");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Volunteer", "Donations", "Partnerships", "Certificates", "General"];

  const filteredFaqs = activeCategory === "All"
    ? contactData.faqs
    : contactData.faqs.filter((faq) => faq.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextBtn = document.getElementById(`faq-trigger-${filteredFaqs[(index + 1) % filteredFaqs.length].id}`);
      nextBtn?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevBtn = document.getElementById(`faq-trigger-${filteredFaqs[(index - 1 + filteredFaqs.length) % filteredFaqs.length].id}`);
      prevBtn?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      const firstBtn = document.getElementById(`faq-trigger-${filteredFaqs[0].id}`);
      firstBtn?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      const lastBtn = document.getElementById(`faq-trigger-${filteredFaqs[filteredFaqs.length - 1].id}`);
      lastBtn?.focus();
    }
  };

  return (
    <section aria-labelledby="faq-heading" className="mb-24 scroll-mt-24" id="faq">
      <Container maxWidth="content">
        <SlideUp className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-4">
            <CircleHelp className="w-4 h-4" aria-hidden="true" />
            <span>Got Questions?</span>
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-300">
            Everything you need to know about getting involved, making donations, partnering, and volunteering with InAmigos Foundation.
          </p>
        </SlideUp>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="FAQ Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ds-focus ${
                activeCategory === cat
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq: FAQ, index: number) => {
            const isOpen = openId === faq.id;
            const triggerId = `faq-trigger-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <FadeIn key={faq.id}>
                <GlassCard className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden transition-colors hover:border-slate-700">
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFAQ(faq.id)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-slate-100 font-semibold text-base sm:text-lg hover:text-emerald-400 transition-colors ds-focus"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" aria-hidden="true" />
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-emerald-400" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 border-t border-slate-800/60 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
