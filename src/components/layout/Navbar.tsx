import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { siteConfig } from "@/app/config";
import { routePaths } from "@/app/routes";
import { navigationItems } from "@/data";
import { Menu } from "@/lib/icons";
import { IconButton, Container } from "@/components/ui";
import { classNames } from "@/utils";

import { MobileNavigation } from "./MobileNavigation";

/** Site-wide sticky navigation, sourced exclusively from the navigation data set. */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrolledState = () => setHasScrolled(window.scrollY > 8);

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  return (
    <header className={classNames("site-header", hasScrolled && "site-header--scrolled")} data-site-header>
      <Container className="site-header__container">
        <Link className="site-brand ds-focus" to={routePaths.home} aria-label={`${siteConfig.name} Home`}>
          <img
            src="/logo.svg"
            alt="InAmigos Foundation Logo"
            className="site-brand__logo"
            width="42"
            height="42"
            style={{ height: "2.65rem", width: "auto", display: "block" }}
          />
        </Link>

        <nav className="site-header__desktop-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              className={({ isActive }) => classNames("site-nav-link ds-focus", isActive && "site-nav-link--active")}
              to={item.href}
              end={item.href === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <IconButton
          className="site-header__menu-button"
          aria-label="Open navigation menu"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          icon={<Menu size={22} aria-hidden="true" />}
          onClick={() => setIsMenuOpen(true)}
        />
      </Container>

      <MobileNavigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
