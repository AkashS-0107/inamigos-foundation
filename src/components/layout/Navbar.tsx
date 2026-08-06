import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

import { navigationItems } from "@/data";
import { useActiveSection } from "@/hooks";
import { Menu } from "@/lib/icons";
import { IconButton, Container } from "@/components/ui";
import { classNames, scrollToSection } from "@/utils";

import { MobileNavigation } from "./MobileNavigation";
import { RightScrollNav } from "./RightScrollNav";

/** Site-wide retractable floating glass header navigation. */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useActiveSection();
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      setHasScrolled(currentScrollY > 20);

      // Keep fully visible near top of page
      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else {
        // Hysteresis threshold to prevent rapid flickering on small scrolls
        if (scrollDelta > 10) {
          setIsVisible(false);
        } else if (scrollDelta < -10) {
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const sectionId = href === "/" ? "home" : href.replace(/^\//, "").replace(/^#/, "");
    if (sectionId) {
      setActiveSection(sectionId);
      scrollToSection(sectionId);
      navigate(href === "/" ? "/" : `/${sectionId}`);
    }
  };

  const isHeaderVisible = isVisible || isMenuOpen;

  return (
    <>
      <header
        className={classNames(
          "site-header",
          hasScrolled && "site-header--scrolled",
          isHeaderVisible ? "site-header--visible" : "site-header--hidden"
        )}
        data-site-header
      >
        <Container className="site-header__container">
          {/* Primary Desktop Navigation */}
          <nav className="site-header__desktop-nav" aria-label="Primary navigation">
            {navigationItems.map((item) => {
              const sectionId = item.href === "/" ? "home" : item.href.replace(/^\//, "").replace(/^#/, "");
              const isActive = activeSection === sectionId;

              return (
                <NavLink
                  key={item.href}
                  className={classNames("site-nav-link ds-focus", isActive && "site-nav-link--active")}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="site-nav-link__indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile Navigation Drawer Trigger */}
          <IconButton
            className="site-header__menu-button"
            aria-label="Open navigation menu"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            icon={<Menu size={22} aria-hidden="true" />}
            onClick={() => setIsMenuOpen(true)}
          />
        </Container>

        <MobileNavigation
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </header>

      <RightScrollNav />
    </>
  );
}


