import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const SECTION_IDS = ["home", "about", "projects", "impact", "gallery", "volunteer", "contact"];

function getSectionFromLocation(pathname: string, hash: string): string | null {
  const hashId = hash ? decodeURIComponent(hash.replace(/^[/#]+/, "")) : "";
  if (hashId && SECTION_IDS.includes(hashId)) {
    return hashId;
  }
  const pathId = pathname ? pathname.replace(/^\//, "").replace(/\/$/, "") : "";
  if (pathId && SECTION_IDS.includes(pathId)) {
    return pathId;
  }
  if (pathname === "/") return "home";
  return null;
}

/**
 * Custom hook tracking active main section in viewport with IntersectionObserver,
 * route location sync, and manual override locking for smooth navigation clicks.
 */
export function useActiveSection(): readonly [string, (sectionId: string) => void] {
  const location = useLocation();
  const initialSection = getSectionFromLocation(location.pathname, location.hash) || "home";
  const [activeSection, setActiveSection] = useState<string>(initialSection);
  const scrollLockUntil = useRef<number>(0);

  const setManualSection = useCallback((sectionId: string) => {
    const cleanId = sectionId === "/" ? "home" : sectionId.replace(/^[/#]+/, "");
    if (SECTION_IDS.includes(cleanId)) {
      setActiveSection(cleanId);
      scrollLockUntil.current = Date.now() + 900;
    }
  }, []);

  // Update state when URL changes (deep links, browser back/forward)
  useEffect(() => {
    const matchedSection = getSectionFromLocation(location.pathname, location.hash);
    if (matchedSection) {
      setActiveSection(matchedSection);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      if (Date.now() < scrollLockUntil.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollY < 80) {
        setActiveSection("home");
        return;
      }

      if (windowHeight + scrollY >= scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (Date.now() < scrollLockUntil.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollY < 80) {
        setActiveSection("home");
        return;
      }

      if (windowHeight + scrollY >= scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      const intersectingEntries = entries.filter((entry) => entry.isIntersecting);
      if (intersectingEntries.length > 0) {
        const sorted = intersectingEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const mostVisible = sorted[0];
        if (mostVisible && mostVisible.target.id && SECTION_IDS.includes(mostVisible.target.id)) {
          setActiveSection(mostVisible.target.id);
        }
      }
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-80px 0px -30% 0px",
      threshold: [0.1, 0.25, 0.5, 0.75],
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [activeSection, setManualSection] as const;
}

