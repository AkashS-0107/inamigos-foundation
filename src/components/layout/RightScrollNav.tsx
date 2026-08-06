import { motion, LayoutGroup } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useActiveSection } from "@/hooks";
import { classNames, scrollToSection } from "@/utils";

export interface RightScrollNavItem {
  id: string;
  label: string;
  href: string;
}

const NAVIGATION_SECTIONS: readonly RightScrollNavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "impact", label: "Impact", href: "/impact" },
  { id: "gallery", label: "Gallery", href: "/gallery" },
  { id: "volunteer", label: "Volunteer", href: "/volunteer" },
  { id: "contact", label: "Contact", href: "/contact" },
];

/**
 * Premium floating right-side section navigator.
 * Replaces retractable top header reliance while scrolling desktop viewports.
 * Built with glassmorphic capsule styling, smooth Framer Motion transitions,
 * and IntersectionObserver single-source-of-truth active state.
 */
export function RightScrollNav() {
  const [activeSection, setActiveSection] = useActiveSection();
  const navigate = useNavigate();

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string, href: string) => {
    event.preventDefault();
    setActiveSection(id);
    scrollToSection(id);
    navigate(href === "/" ? "/" : `/${id}`);
  };

  return (
    <aside className="right-scroll-nav" aria-label="Right section navigator">
      <nav className="right-scroll-nav__capsule" aria-label="Section navigation">
        <LayoutGroup id="right-scroll-nav-group">
          {NAVIGATION_SECTIONS.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                className={classNames(
                  "right-scroll-nav__link",
                  "ds-focus",
                  isActive && "right-scroll-nav__link--active"
                )}
                onClick={(e) => handleNavClick(e, item.id, item.href)}
                aria-label={`${item.label} section`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="right-scroll-nav__dot-wrapper" aria-hidden="true">
                  {isActive ? (
                    <motion.span
                      layoutId="activeRightNavDot"
                      className="right-scroll-nav__dot right-scroll-nav__dot--active"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  ) : (
                    <span className="right-scroll-nav__dot" />
                  )}
                </span>

                <span className="right-scroll-nav__label">
                  {item.label}
                </span>
              </a>
            );
          })}
        </LayoutGroup>
      </nav>
    </aside>
  );
}
