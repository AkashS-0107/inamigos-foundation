import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@/app/layouts";
import { HomePage } from "@/pages";

import { routePaths } from "./paths";

/** Single-page application route setup mapping main section routes to HomePage. */
export const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: routePaths.about.slice(1), element: <HomePage /> },
      { path: routePaths.projects.slice(1), element: <HomePage /> },
      { path: routePaths.impact.slice(1), element: <HomePage /> },
      { path: routePaths.gallery.slice(1), element: <HomePage /> },
      { path: routePaths.volunteer.slice(1), element: <HomePage /> },
      { path: routePaths.contact.slice(1), element: <HomePage /> },
      { path: routePaths.notFound, element: <HomePage /> },
    ],
  },
]);
