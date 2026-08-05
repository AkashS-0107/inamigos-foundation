import { useEffect } from "react";
import { ScrollRestoration, useLocation } from "react-router-dom";

import { scrollToSection } from "@/utils";

/** Restores route positions and aligns hash targets below the sticky site header. */
export function ScrollBehavior() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const sectionId = decodeURIComponent(hash.slice(1));
    const frame = window.requestAnimationFrame(() => scrollToSection(sectionId));
    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  return <ScrollRestoration getKey={(location) => location.pathname} />;
}
