import { Outlet } from "react-router-dom";

import { PageTransition } from "@/components";

/** Route content boundary with a reusable, reduced-motion-aware transition surface. */
export function PageLayout() {
  return <PageTransition className="page-transition"><Outlet /></PageTransition>;
}
