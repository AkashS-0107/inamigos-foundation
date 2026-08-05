import { createBrowserRouter } from "react-router-dom";

import { PageLayout, RootLayout } from "@/app/layouts";
import { HomePage } from "@/pages";

import { routePaths } from "./paths";

/** Route shells contain no page content until route modules are introduced. */
export const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: routePaths.about.slice(1), element: <PageLayout /> },
      { path: routePaths.projects.slice(1), element: <PageLayout /> },
      { path: routePaths.impact.slice(1), element: <PageLayout /> },
      { path: routePaths.gallery.slice(1), element: <PageLayout /> },
      { path: routePaths.volunteer.slice(1), element: <PageLayout /> },
      { path: routePaths.contact.slice(1), element: <PageLayout /> },
      { path: routePaths.notFound, element: <PageLayout /> },
    ],
  },
]);
