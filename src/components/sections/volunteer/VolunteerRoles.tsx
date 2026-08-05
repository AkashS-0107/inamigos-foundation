import { useMemo, useState } from "react";
import { volunteerRolesData } from "@/data/content/volunteer";
import type { VolunteerRole } from "@/types/volunteer";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { HoverGlow, HoverScale, RevealOnScroll, StaggerContainer } from "@/components/animations/MotionWrappers";
import { VolunteerIcon } from "./VolunteerIcon";

interface VolunteerRolesProps {
  onApplyForRole: (role: VolunteerRole) => void;
}

const FILTER_CATEGORIES = ["All Roles", "Education", "Healthcare", "Environment", "Outreach", "Media", "Events", "Remote"] as const;

export function VolunteerRoles({ onApplyForRole }: VolunteerRolesProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All Roles");

  const filteredRoles = useMemo(() => {
    if (activeFilter === "All Roles") return volunteerRolesData;
    if (activeFilter === "Remote") return volunteerRolesData.filter((r) => r.location === "Remote");
    return volunteerRolesData.filter((r) => r.category.toLowerCase() === activeFilter.toLowerCase());
  }, [activeFilter]);

  return (
    <section
      id="volunteer-roles"
      aria-labelledby="roles-heading"
      className="py-16 sm:py-24 relative"
    >
      <Container maxWidth="content">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <VolunteerIcon name="Briefcase" size={14} /> Open Positions
          </div>
          <h2 id="roles-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Open <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Volunteer Roles</span>
          </h2>
          <p className="text-slate-300 mt-3 text-base sm:text-lg">
            Find the role that aligns with your skills, passion, and schedule. Whether on-site in local chapters or 100% remote, your contribution makes a difference.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {FILTER_CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer ${
                  isActive
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20"
                    : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Roles Grid */}
        <StaggerContainer staggerChildren={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role) => (
            <RevealOnScroll key={role.id}>
              <HoverScale scale={1.015}>
                <HoverGlow glow="0 10px 25px -10px rgba(16, 185, 129, 0.25)">
                  <GlassCard className="relative flex flex-col justify-between h-full p-6 bg-slate-900/70 border border-slate-800/90 rounded-2xl overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
                    <div>
                      {/* Card Header Badges */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
                            {role.category}
                          </span>
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                              role.location === "Remote"
                                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                : role.location === "Hybrid"
                                ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                                : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            }`}
                          >
                            {role.location}
                          </span>
                        </div>

                        {role.urgent && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> Urgent
                          </span>
                        )}
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                          <VolunteerIcon name={role.icon} size={22} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                            {role.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                            <VolunteerIcon name="Clock" size={13} className="text-emerald-400" />
                            <span>{role.timeCommitment}</span>
                            {role.spotsAvailable && (
                              <span className="text-emerald-400 font-medium">
                                • {role.spotsAvailable} spots left
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-4 font-normal">
                        {role.shortDescription}
                      </p>

                      {/* Required Skills Badges */}
                      <div className="mb-6">
                        <div className="text-xs text-slate-400 font-medium mb-2">Required Skills:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {role.requiredSkills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-slate-300 text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer CTA */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs text-slate-400 line-clamp-1 max-w-[55%]">
                        {role.impactSummary}
                      </span>
                      <button
                        type="button"
                        onClick={() => onApplyForRole(role)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md cursor-pointer"
                      >
                        Apply Now <VolunteerIcon name="ArrowRight" size={14} />
                      </button>
                    </div>
                  </GlassCard>
                </HoverGlow>
              </HoverScale>
            </RevealOnScroll>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
