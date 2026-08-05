import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { volunteerRolesData } from "@/data/content/volunteer";
import type { ApplicationFormData, VolunteerRole } from "@/types/volunteer";
import { VolunteerIcon } from "./VolunteerIcon";

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRole?: VolunteerRole | null;
}

export function VolunteerModal({ isOpen, onClose, selectedRole }: VolunteerModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: "",
    email: "",
    phone: "",
    roleId: selectedRole?.id || "role-education-mentor",
    locationType: selectedRole?.location || "Hybrid",
    availability: "Weekend Drives (3-4 hrs/week)",
    motivation: "",
  });

  // Keep selected role in sync when prop changes
  useEffect(() => {
    if (selectedRole) {
      setFormData((prev) => ({
        ...prev,
        roleId: selectedRole.id,
        locationType: selectedRole.location,
      }));
    }
  }, [selectedRole]);

  // Handle escape key to close modal & body overflow lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Focus trap / auto-focus modal when opened
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length > 0) {
        focusable[0].focus();
      }
    }
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="volunteer-modal-title"
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 text-white"
          >
            {/* Header */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-r from-emerald-950/50 via-teal-950/40 to-slate-900 border-b border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Close modal"
              >
                <VolunteerIcon name="X" size={20} />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <VolunteerIcon name="HeartHandshake" size={14} /> Join InAmigos Movement
              </div>
              <h2 id="volunteer-modal-title" className="text-2xl font-bold text-white">
                {selectedRole ? `Apply: ${selectedRole.title}` : "Become an InAmigos Volunteer"}
              </h2>
              <p className="text-sm text-slate-300 mt-1">
                Take the first step toward empowering communities. Fill out your details below.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <VolunteerIcon name="CheckCircle2" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="font-semibold text-emerald-400">{formData.fullName}</span>!
                    Our Volunteer Coordinator will reach out to you within 24 hours to schedule your brief
                    orientation.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-left text-xs text-slate-300 space-y-2">
                    <div className="font-semibold text-white">Application Summary:</div>
                    <p>• Role: {volunteerRolesData.find((r) => r.id === formData.roleId)?.title || "General Volunteer"}</p>
                    <p>• Mode: {formData.locationType}</p>
                    <p>• Availability: {formData.availability}</p>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors text-sm shadow-lg shadow-emerald-950/40"
                    >
                      Done & Return to Site
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="modal-phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Role Selection */}
                  <div>
                    <label htmlFor="modal-role" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Preferred Volunteer Role *
                    </label>
                    <select
                      id="modal-role"
                      value={formData.roleId}
                      onChange={(e) => {
                        const r = volunteerRolesData.find((item) => item.id === e.target.value);
                        setFormData({
                          ...formData,
                          roleId: e.target.value,
                          locationType: r?.location || formData.locationType,
                        });
                      }}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                    >
                      {volunteerRolesData.map((role) => (
                        <option key={role.id} value={role.id} className="bg-slate-900 text-white">
                          {role.title} ({role.category} • {role.location})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location Mode & Availability */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="modal-location" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Work Mode
                      </label>
                      <select
                        id="modal-location"
                        value={formData.locationType}
                        onChange={(e) => setFormData({ ...formData, locationType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                      >
                        <option value="On-Site" className="bg-slate-900">On-Site Field Drives</option>
                        <option value="Remote" className="bg-slate-900">100% Remote / Online</option>
                        <option value="Hybrid" className="bg-slate-900">Hybrid (On-Site + Remote)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="modal-availability" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Weekly Availability
                      </label>
                      <select
                        id="modal-availability"
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                      >
                        <option value="Weekend Drives (3-4 hrs/week)" className="bg-slate-900">Weekend Drives (3-4 hrs)</option>
                        <option value="Flexible Weekdays (2-3 hrs/week)" className="bg-slate-900">Flexible Weekdays (2-3 hrs)</option>
                        <option value="Full Campaign Focus (5+ hrs/week)" className="bg-slate-900">Campaign Focus (5+ hrs)</option>
                      </select>
                    </div>
                  </div>

                  {/* Short Motivation */}
                  <div>
                    <label htmlFor="modal-motivation" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Why do you want to volunteer with InAmigos? (Optional)
                    </label>
                    <textarea
                      id="modal-motivation"
                      rows={2}
                      placeholder="Share a brief note on your skills or why this cause matters to you..."
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800 mt-6">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors text-sm font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-semibold rounded-xl transition-all text-sm shadow-lg shadow-emerald-500/20"
                    >
                      Submit Application <VolunteerIcon name="Send" size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
