import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { siteConfig } from "@/app/config";
import { routePaths } from "@/app/routes";
import { navigationItems } from "@/data";
import { useActiveSection } from "@/hooks";
import { Menu } from "@/lib/icons";
import { IconButton, Container } from "@/components/ui";
import { classNames, scrollToSection } from "@/utils";

import { MobileNavigation } from "./MobileNavigation";

/** Site-wide sticky header & navigation featuring official logo only and scroll-spy active state. */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useActiveSection();
  const navigate = useNavigate();

  useEffect(() => {
    const updateScrolledState = () => setHasScrolled(window.scrollY > 8);

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
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

  return (
    <header className={classNames("site-header", hasScrolled && "site-header--scrolled")} data-site-header>
      <Container className="site-header__container">
        {/* Official Logo Only - No Text Beside It */}
        <Link
          className="site-brand ds-focus"
          to={routePaths.home}
          aria-label={`${siteConfig.name} Home`}
          onClick={(e) => handleNavClick(e, routePaths.home)}
        >
          <img
            src="/logo.svg"
            alt="InAmigos Foundation Logo"
            className="site-brand__logo"
            width="42"
            height="42"
            decoding="async"
            style={{ height: "2.65rem", width: "auto", display: "block" }}
          />
        </Link>

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
  );
}

