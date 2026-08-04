import { Outlet } from "react-router-dom";

/** Route content boundary reserved for page transitions and page-level layout rules. */
export function PageLayout() {
  return <Outlet />;
}
