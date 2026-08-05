import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { navigationItems } from "@/data";
import { X } from "@/lib/icons";
import { IconButton } from "@/components/ui";
import { classNames } from "@/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

/** Modal navigation drawer with focus containment for compact viewports. */
export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const drawerRef = useRef<HTMLElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedElement.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const closeButton = drawerRef.current?.querySelector<HTMLButtonElement>("button");
    const focusFrame = window.requestAnimationFrame(() => closeButton?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusableElements = Array.from(drawerRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement.current?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-navigation__overlay"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.aside
            id="mobile-navigation"
            ref={drawerRef}
            className="mobile-navigation"
            aria-label="Mobile navigation"
            aria-modal="true"
            role="dialog"
            initial={shouldReduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mobile-navigation__header">
              <span className="mobile-navigation__title">Menu</span>
              <IconButton aria-label="Close navigation menu" icon={<X size={22} aria-hidden="true" />} onClick={onClose} />
            </div>
            <nav className="mobile-navigation__links" aria-label="Primary navigation">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.href}
                    className={({ isActive }) => classNames("mobile-navigation__link ds-focus", isActive && "mobile-navigation__link--active")}
                    to={item.href}
                    end={item.href === "/"}
                    onClick={onClose}
                  >
                    <Icon size={19} aria-hidden="true" />
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
