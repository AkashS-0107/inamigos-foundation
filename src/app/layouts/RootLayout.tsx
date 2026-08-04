import { Outlet } from "react-router-dom";

/** Global layout boundary; navigation and footer will be composed here later. */
export function RootLayout() {
  return <Outlet />;
}
