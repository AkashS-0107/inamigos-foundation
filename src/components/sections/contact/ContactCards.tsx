import { useState } from "react";
import { FadeIn, StaggerContainer } from "@/components/animations";
import { GlassCard } from "@/components/ui";
import { contactData } from "@/data/content/contact";
import type { ContactMethod } from "@/types/contact";
import { Check, Clock, Copy, ExternalLink, Mail, MapPin, Phone } from "@/lib/icons";

const iconMap = {
  Mail,
  Phone,
  MapPin,
  Clock,
};

export function ContactCards() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {contactData.methods.map((method: ContactMethod) => {
        const IconComponent = iconMap[method.iconName];
        const isCopied = copiedId === method.id;

        return (
          <FadeIn key={method.id}>
            <GlassCard className="relative group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 h-full flex flex-col justify-between overflow-hidden">
              {/* Decorative Accent Glow */}
              <div
                className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"
                aria-hidden="true"
              />

              <div>
                {/* Header Icon + Copy Action */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-300">
                    <IconComponent className="w-6 h-6" aria-hidden="true" />
                  </div>

                  {(method.type === "email" || method.type === "phone") && (
                    <button
                      type="button"
                      onClick={() => handleCopy(method.id, method.value)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-md bg-slate-800/70 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ds-focus"
                      aria-label={`Copy ${method.title} to clipboard`}
                      title="Copy to clipboard"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Card Title & Value */}
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  {method.title}
                </h3>
                <p className="text-base sm:text-lg font-bold text-white mb-2 break-words">
                  {method.value}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {method.detail}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={method.actionHref}
                target={method.actionHref.startsWith("http") ? "_blank" : undefined}
                rel={method.actionHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-800 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors ds-focus group/link"
              >
                <span>{method.actionLabel}</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>
            </GlassCard>
          </FadeIn>
        );
      })}
    </StaggerContainer>
  );
}
