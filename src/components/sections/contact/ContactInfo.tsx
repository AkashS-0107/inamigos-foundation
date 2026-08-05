import { Container } from "@/components/ui";
import { ContactCards } from "./ContactCards";
import { ShieldCheck, Users, HeartHandshake } from "@/lib/icons";

export function ContactInfo() {
  return (
    <section aria-label="Contact Information and Direct Channels">
      <Container maxWidth="content">
        <ContactCards />

        {/* Operational Highlights Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 p-4 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Registered NGO</h4>
              <p className="text-xs text-slate-400">ISO 9001:2015 & 80G Certified</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-4">
            <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
              <HeartHandshake className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wide">CSR & Partnerships</h4>
              <p className="text-xs text-slate-400">Dedicated Alliance Desk</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-4">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Users className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Community Support</h4>
              <p className="text-xs text-slate-400">Over 4,500+ Active Volunteers</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
