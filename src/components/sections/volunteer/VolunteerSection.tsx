import { useState } from "react";
import type { VolunteerRole } from "@/types/volunteer";
import { VolunteerBenefits } from "./VolunteerBenefits";
import { VolunteerCTA } from "./VolunteerCTA";
import { VolunteerFAQ } from "./VolunteerFAQ";
import { VolunteerHeader } from "./VolunteerHeader";
import { VolunteerJourney } from "./VolunteerJourney";
import { VolunteerModal } from "./VolunteerModal";
import { VolunteerRoles } from "./VolunteerRoles";
import { VolunteerTestimonials } from "./VolunteerTestimonials";

export function VolunteerSection() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<VolunteerRole | null>(null);

  const handleOpenApplyModal = (role?: VolunteerRole) => {
    setSelectedRole(role || null);
    setIsApplyModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsApplyModalOpen(false);
    setSelectedRole(null);
  };

  return (
    <section
      id="volunteer"
      aria-label="InAmigos Foundation Volunteer & Community Engagement"
      className="relative py-20 sm:py-28 bg-slate-950 text-white overflow-hidden border-t border-slate-900 scroll-mt-20"
    >
      {/* Background Ambient Gradient Lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]"
        role="presentation"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-0 w-[600px] h-[500px] bg-teal-500/10 rounded-full blur-[160px]"
        role="presentation"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px]"
        role="presentation"
      />

      {/* 1. Volunteer Header */}
      <VolunteerHeader onOpenApplyModal={() => handleOpenApplyModal()} />

      {/* 2. Why Volunteer? (Benefits Grid) */}
      <VolunteerBenefits />

      {/* 3. Volunteer Journey (Interactive 6-Step Timeline) */}
      <VolunteerJourney />

      {/* 4. Volunteer Open Roles (Responsive Grid & Filters) */}
      <VolunteerRoles onApplyForRole={(role) => handleOpenApplyModal(role)} />

      {/* 5. Volunteer Testimonials (Modern Slider/Carousel) */}
      <VolunteerTestimonials />

      {/* 6. Frequently Asked Questions (Accordion) */}
      <VolunteerFAQ />

      {/* 7. Final Action Banner (CTA) */}
      <VolunteerCTA onOpenApplyModal={() => handleOpenApplyModal()} />

      {/* Interactive Application Modal */}
      <VolunteerModal
        isOpen={isApplyModalOpen}
        onClose={handleCloseModal}
        selectedRole={selectedRole}
      />
    </section>
  );
}
