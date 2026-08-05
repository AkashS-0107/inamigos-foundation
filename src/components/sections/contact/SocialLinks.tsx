import { FadeIn, StaggerContainer } from "@/components/animations";
import { Container, GlassCard } from "@/components/ui";
import { contactData } from "@/data/content/contact";
import type { SocialLink } from "@/types/contact";
import { ExternalLink, Facebook, Instagram, Linkedin, Twitter, Youtube } from "@/lib/icons";

const socialIconMap = {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
};

export function SocialLinks() {
  return (
    <section aria-labelledby="social-media-heading" className="mb-24">
      <Container maxWidth="content">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 id="social-media-heading" className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Connect With Us Across Social Media
          </h3>
          <p className="text-sm sm:text-base text-slate-400">
            Follow our daily field operations, ground stories, upcoming volunteer drives, and live impact updates.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {contactData.socialLinks.map((item: SocialLink) => {
            const IconComponent = socialIconMap[item.iconName];

            return (
              <FadeIn key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className="block h-full group ds-focus rounded-2xl"
                >
                  <GlassCard className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl h-full flex flex-col justify-between relative overflow-hidden">
                    {/* Hover Ambient Tint */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                      aria-hidden="true"
                    />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true" />
                      </div>

                      <h4 className="text-base font-bold text-white mb-0.5 group-hover:text-emerald-400 transition-colors">
                        {item.platform}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono mb-3 truncate">
                        {item.handle}
                      </p>
                    </div>

                    {item.followerCount && (
                      <div className="pt-3 border-t border-slate-800/80 text-[11px] font-medium text-slate-400 flex items-center justify-between">
                        <span>Community</span>
                        <span className="text-slate-200 font-semibold">{item.followerCount}</span>
                      </div>
                    )}
                  </GlassCard>
                </a>
              </FadeIn>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
