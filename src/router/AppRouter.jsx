import { HomeIcon } from "@heroicons/react/24/solid";
import { NavLink, Outlet, createBrowserRouter } from "react-router-dom";
import { HomePage, NotFoundPage, ProjectsPage, SingleProjectPage } from "src/pages";

export const router = createBrowserRouter(
  [
    {
      path: "",
      element: <HomePage />,
      handle: {
        breadCrumb: () => <HomeIcon />,
      },
    },
    {
      path: "projects",
      element: <Outlet />,
      handle: {
        breadCrumb: () => (
          <NavLink aria-label="Go to the projects page" className="link-color" to="/projects">
            projects
          </NavLink>
        ),
      },
      children: [
        {
          index: true,
          element: <ProjectsPage />,
        },
        {
          path: ":project_slug",
          element: <SingleProjectPage />,
          handle: {
            breadCrumb: (params) => params?.project_slug || "project",
          },
        },
      ],
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
