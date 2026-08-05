import { Link, useNavigate } from "react-router-dom";

import { siteConfig } from "@/app/config";
import { navigationItems, socialLinks } from "@/data";
import { Container, Divider } from "@/components/ui";
import { scrollToSection } from "@/utils";

/** Compact premium global footer matching InAmigos RC1 brand guidelines. */
export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="site-footer">
      <Container className="site-footer__container">
        <div className="site-footer__main">
          {/* Official Logo & Two-Line NGO Summary */}
          <div className="site-footer__brand-col">
            <Link
              to="/"
              className="site-footer__brand-link ds-focus"
              aria-label={`${siteConfig.name} Home`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
                navigate("/");
              }}
            >
              <img
                src="/logo.svg"
                alt="InAmigos Foundation Logo"
                width="40"
                height="40"
                className="site-footer__logo"
                style={{ height: "2.5rem", width: "auto" }}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="site-footer__description">
              InAmigos Foundation is a Govt. Licensed Section 8 NGO driving social impact through education, healthcare, environmental drives, and community empowerment.
            </p>
          </div>

          {/* Quick Links Navigation */}
          <nav className="site-footer__nav" aria-label="Footer Quick Links">
            <ul className="site-footer__links-row">
              {navigationItems.map((item) => {
                const sectionId = item.href === "/" ? "home" : item.href.replace(/^\//, "").replace(/^#/, "");
                return (
                  <li key={item.href}>
                    <Link
                      className="site-footer__link ds-focus"
                      to={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (sectionId) {
                          scrollToSection(sectionId);
                          navigate(item.href === "/" ? "/" : `/${sectionId}`);
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Social Channels */}
          <div className="site-footer__social-col">
            <ul className="site-footer__socials" aria-label="Official Social Channels">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      className="site-footer__social ds-focus"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`InAmigos Foundation on ${item.label}`}
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Divider className="site-footer__divider" />

        <div className="site-footer__bottom">
          <small className="site-footer__copyright">
            © {currentYear} {siteConfig.name}. Section 8 Registered Non-Profit • 80G & 12A Certified • ISO 9001:2015.
          </small>
        </div>
      </Container>
    </footer>
  );
}


