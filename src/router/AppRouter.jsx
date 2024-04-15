import { createBrowserRouter } from "react-router-dom";
import { HomePage, NotFoundPage, ProjectsPage, SingleProjectPage } from "src/pages";

export const router = createBrowserRouter(
  [
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "projects",
      element: <ProjectsPage />,
    },
    {
      path: "projects/:project_slug",
      element: <SingleProjectPage />,
    },
    {
      path: "not-found",
      element: <NotFoundPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
  { basename: `/${process.env.PUBLIC_URL}` }
);
