import { useState, type FormEvent, type ChangeEvent } from "react";
import { FadeIn, SlideUp } from "@/components/animations";
import { Button, GlassCard } from "@/components/ui";
import type { ContactFormData, ContactFormErrors } from "@/types/contact";
import { AlertCircle, CheckCircle2, Loader2, Send } from "@/lib/icons";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "General Inquiry",
  message: "",
};

const subjectOptions = [
  "General Inquiry",
  "Volunteering Opportunity",
  "CSR & Corporate Partnership",
  "Donation & Financial Support",
  "Certificates & Internship",
  "Media & Press Inquiry",
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateField = (name: keyof ContactFormData, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "email":
        if (!value.trim()) return "Email address is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Please enter a valid email address";
        return undefined;
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^[+\d\s\-()]{10,}$/.test(value.trim())) return "Please enter a valid phone number (at least 10 digits)";
        return undefined;
      case "subject":
        if (!value.trim()) return "Please select a subject";
        return undefined;
      case "message":
        if (!value.trim()) return "Message content is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters long";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error on typing if valid
    if (errors[name as keyof ContactFormErrors]) {
      const fieldError = validateField(name as keyof ContactFormData, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};
    (Object.keys(formData) as Array<keyof ContactFormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API submission network call
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsLoading(false);
      setIsSuccess(true);
    } catch {
      setIsLoading(false);
      setSubmitError("Failed to send message. Please try again or email us directly at contact@inamigosfoundation.org");
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSuccess(false);
    setSubmitError(null);
  };

  return (
    <div id="contact-form" className="scroll-mt-24">
      <GlassCard className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        {/* Top Gradient Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

        {isSuccess ? (
          <FadeIn className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-emerald-400">{formData.name}</span>. Our team has received your message regarding <span className="font-semibold text-white">&quot;{formData.subject}&quot;</span> and will respond to <span className="font-semibold text-slate-200">{formData.email}</span> within 24 hours.
            </p>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-left max-w-md mx-auto mb-8 text-xs text-slate-400 space-y-1">
              <p><strong className="text-slate-300">Reference ID:</strong> INA-MSG-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p><strong className="text-slate-300">Recipient Desk:</strong> InAmigos Public Relations & Partner Cell</p>
            </div>

            <Button onClick={handleReset} variant="outline" size="md">
              Send Another Message
            </Button>
          </FadeIn>
        ) : (
          <div>
            <SlideUp>
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send Us a Direct Message</h3>
                <p className="text-sm text-slate-400">
                  Fill out the form below and our dedicated team will get back to you promptly.
                </p>
              </div>
            </SlideUp>

            {submitError && (
              <div
                role="alert"
                aria-live="polite"
                className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Grid: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Full Name <span className="text-rose-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ananya Sharma"
                    disabled={isLoading}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-rose-500/80 focus:ring-rose-500/50"
                        : "border-slate-800 focus:border-emerald-500 focus:ring-emerald-500/20"
                    }`}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Address Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email Address <span className="text-rose-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. ananya@example.com"
                    disabled={isLoading}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-rose-500/80 focus:ring-rose-500/50"
                        : "border-slate-800 focus:border-emerald-500 focus:ring-emerald-500/20"
                    }`}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Grid: Phone & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone Number Field */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Phone Number <span className="text-rose-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    disabled={isLoading}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? "border-rose-500/80 focus:ring-rose-500/50"
                        : "border-slate-800 focus:border-emerald-500 focus:ring-emerald-500/20"
                    }`}
                  />
                  {errors.phone && (
                    <p id="contact-phone-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Subject Selection Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Inquiry Subject <span className="text-rose-400" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isLoading}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? "border-rose-500/80 focus:ring-rose-500/50"
                        : "border-slate-800 focus:border-emerald-500 focus:ring-emerald-500/20"
                    }`}
                  >
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p id="contact-subject-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Message <span className="text-rose-400" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help or collaborate..."
                  disabled={isLoading}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all resize-y ${
                    errors.message
                      ? "border-rose-500/80 focus:ring-rose-500/50"
                      : "border-slate-800 focus:border-emerald-500 focus:ring-emerald-500/20"
                  }`}
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Form Actions */}
              <div className="pt-2 flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  <span className="text-rose-400">*</span> Required fields
                </p>
                <Button
                  type="submit"
                  disabled={isLoading}
                  variant="primary"
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 shadow-lg shadow-emerald-500/20"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Send Message</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
