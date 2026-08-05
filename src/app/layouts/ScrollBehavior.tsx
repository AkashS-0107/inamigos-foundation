import { useEffect } from "react";
import { ScrollRestoration, useLocation } from "react-router-dom";

import { scrollToSection } from "@/utils";

/** Restores route positions and aligns hash or pathname section targets below the sticky site header. */
export function ScrollBehavior() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let targetId = "";
    if (hash) {
      targetId = decodeURIComponent(hash.slice(1));
    } else if (pathname && pathname !== "/") {
      targetId = pathname.replace(/^\//, "");
    } else {
      targetId = "home";
    }

    if (targetId) {
      let attempts = 0;
      let animationFrameId: number;
      let timerId: NodeJS.Timeout;

      const tryScroll = () => {
        const scrolled = scrollToSection(targetId);
        if (!scrolled && attempts < 12) {
          attempts++;
          animationFrameId = requestAnimationFrame(tryScroll);
        }
      };

      // Initial frame attempt + small delayed attempt to account for async assets
      animationFrameId = requestAnimationFrame(tryScroll);
      timerId = setTimeout(() => {
        tryScroll();
      }, 100);

      return () => {
        cancelAnimationFrame(animationFrameId);
        clearTimeout(timerId);
      };
    }
  }, [pathname, hash]);

  return <ScrollRestoration getKey={(location) => location.pathname + location.hash} />;
}

