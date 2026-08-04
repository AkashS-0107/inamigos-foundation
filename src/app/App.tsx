import { RouterProvider } from "react-router-dom";

import { AppProvider } from "@/app/providers";
import { router } from "@/app/routes";

/** Application composition root. */
export function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}
