import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Quote, Star } from "lucide-react";
import type { TestimonialCategory, TestimonialItem } from "@/types/impact";

interface ImpactTestimonialsProps {
  testimonials: TestimonialItem[];
}

export function ImpactTestimonials({ testimonials }: ImpactTestimonialsProps) {
  const [selectedCategory, setSelectedCategory] = useState<TestimonialCategory>("All");

  const categories: TestimonialCategory[] = ["All", "Volunteer", "Beneficiary", "Partner"];

  const filteredTestimonials =
    selectedCategory === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === selectedCategory);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-16 sm:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            What Our Community{" "}
            <span className="bg-gradient-to-r from-primary via-teal-300 to-accent bg-clip-text text-transparent">
              Says
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Read first-hand accounts from volunteers on the ground, beneficiaries receiving support, and CSR corporate partners.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat === "All" ? "All Voices" : cat}
              </button>
            );
          })}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-primary/20 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Quote Icon, Rating & Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      {item.category}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-3 -left-3 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                    <p className="relative z-10 text-base sm:text-lg text-slate-200 leading-relaxed font-normal italic">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-primary/80"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {item.role} {item.organizationOrBatch ? `• ${item.organizationOrBatch}` : ""}
                    </p>
                    <p className="text-[11px] text-secondary font-medium mt-0.5">
                      {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
