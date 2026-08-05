import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { volunteerJourneyData } from "@/data/content/volunteer";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll, StaggerContainer } from "@/components/animations/MotionWrappers";
import { VolunteerIcon } from "./VolunteerIcon";

export function VolunteerJourney() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = volunteerJourneyData[activeStepIndex];

  return (
    <section
      id="volunteer-journey"
      aria-labelledby="journey-heading"
      className="py-16 sm:py-24 relative bg-slate-950/60 border-y border-slate-900"
    >
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal-500/5 rounded-full blur-[140px]"
        role="presentation"
      />

      <Container maxWidth="content">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <VolunteerIcon name="Target" size={14} /> Streamlined Path to Action
          </div>
          <h2 id="journey-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your Volunteer <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-slate-300 mt-3 text-base sm:text-lg">
            From your initial sign-up to leading ground campaigns and receiving ISO certification, our 6-step roadmap makes joining simple, supported, and deeply rewarding.
          </p>
        </div>

        {/* Timeline Desktop & Tablet Nav Bar */}
        <div className="relative mb-10 overflow-x-auto pb-4 scrollbar-none">
          {/* Connecting Track */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 z-0" />
          
          <StaggerContainer
            staggerChildren={0.05}
            className="relative z-10 flex items-center justify-between min-w-[700px] md:min-w-0 px-2"
            role="tablist"
            aria-label="Volunteer Journey Steps"
          >
            {volunteerJourneyData.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPassed = idx < activeStepIndex;

              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  role="tab"
                  id={`journey-tab-${idx}`}
                  aria-selected={isActive}
                  aria-controls={`journey-panel-${idx}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center group focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-2xl p-2 transition-all cursor-pointer"
                >
                  {/* Step Bubble */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 scale-110 shadow-emerald-500/30 ring-4 ring-emerald-500/20"
                        : isPassed
                        ? "bg-emerald-950/80 border border-emerald-500/50 text-emerald-400"
                        : "bg-slate-900 border border-slate-800 text-slate-400 group-hover:border-slate-700 group-hover:text-slate-200"
                    }`}
                  >
                    <VolunteerIcon name={step.icon} size={20} />
                  </div>

                  {/* Step Title Label */}
                  <span
                    className={`mt-3 text-xs font-semibold tracking-wide transition-colors ${
                      isActive ? "text-emerald-400" : "text-slate-400 group-hover:text-slate-300"
                    }`}
                  >
                    0{step.stepNumber}. {step.title}
                  </span>
                </button>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Selected Step Detail Panel */}
        <RevealOnScroll>
          <div
            role="tabpanel"
            id={`journey-panel-${activeStepIndex}`}
            aria-labelledby={`journey-tab-${activeStepIndex}`}
            className="max-w-4xl mx-auto"
          >
            <GlassCard className="p-6 sm:p-10 bg-slate-900/80 border border-slate-800 rounded-3xl relative overflow-hidden shadow-2xl">
              {/* Active Ambient Corner Blur */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.stepNumber}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                        #{activeStep.stepNumber}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {activeStep.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                          {activeStep.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
                      <VolunteerIcon name="Clock" size={14} className="text-emerald-400" />
                      Duration: {activeStep.duration}
                    </div>
                  </div>

                  {/* Main Description */}
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    {activeStep.description}
                  </p>

                  {/* Key Actions Bullet Grid */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      What Happens in this Step:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {activeStep.keyActions.map((action, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                        >
                          <VolunteerIcon name="CheckCircle2" size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Step Switcher Buttons */}
                  <div className="pt-4 flex items-center justify-between border-t border-slate-800/80">
                    <button
                      type="button"
                      disabled={activeStepIndex === 0}
                      onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800/80 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 transition-colors"
                    >
                      <VolunteerIcon name="ChevronLeft" size={16} /> Previous Step
                    </button>

                    <div className="text-xs text-slate-400 font-medium">
                      Step {activeStepIndex + 1} of {volunteerJourneyData.length}
                    </div>

                    <button
                      type="button"
                      disabled={activeStepIndex === volunteerJourneyData.length - 1}
                      onClick={() => setActiveStepIndex((prev) => Math.min(volunteerJourneyData.length - 1, prev + 1))}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors shadow-md"
                    >
                      Next Step <VolunteerIcon name="ChevronRight" size={16} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </GlassCard>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
