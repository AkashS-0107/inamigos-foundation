import { Container } from "@/components/ui";
import { ContactCTA } from "./ContactCTA";
import { ContactForm } from "./ContactForm";
import { ContactHeader } from "./ContactHeader";
import { ContactInfo } from "./ContactInfo";
import { FAQAccordion } from "./FAQAccordion";
import { LocationCard } from "./LocationCard";
import { SocialLinks } from "./SocialLinks";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact InAmigos Foundation"
      className="relative py-20 sm:py-28 bg-slate-950 text-white overflow-hidden border-t border-slate-900"
    >
      {/* Background Ambient Lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]"
        role="presentation"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 w-[600px] h-[500px] bg-teal-500/10 rounded-full blur-[160px]"
        role="presentation"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px]"
        role="presentation"
      />

      {/* 1. Contact Header */}
      <ContactHeader />

      {/* 2. Quick Contact Cards & Info Badges */}
      <ContactInfo />

      {/* 3 & 4. Contact Form & Office Location Side-by-Side */}
      <Container maxWidth="content" className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <LocationCard />
          </div>
        </div>
      </Container>

      {/* 5. Social Media Channels */}
      <SocialLinks />

      {/* 6. Frequently Asked Questions */}
      <FAQAccordion />

      {/* 7. Final Contact Action Banner (CTA) */}
      <ContactCTA />
    </section>
  );
}
