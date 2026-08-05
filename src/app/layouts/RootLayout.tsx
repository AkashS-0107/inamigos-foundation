import { Outlet } from "react-router-dom";

import { Footer, Navbar, PageContainer } from "@/components";

import { ScrollBehavior } from "./ScrollBehavior";

/** Persistent application frame that future nested routes render inside. */
export function RootLayout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <PageContainer id="main-content" className="app-shell__main" tabIndex={-1}>
        <Outlet />
      </PageContainer>
      <Footer />
      <ScrollBehavior />
    </div>
  );
}
