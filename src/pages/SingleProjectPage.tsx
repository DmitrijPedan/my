import { useEffect } from "react";
import { useParams } from "react-router";
import { NavLink, useNavigate } from "react-router-dom";
import { PROJECTS } from "src/constants/projects";
import { Page } from "src/layout";

export function SingleProjectPage() {
  const { project_slug } = useParams<{ project_slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const project = PROJECTS.find((project) => project.slug === project_slug);
    if (!project) {
      navigate("/not-found");
    }
  }, [project_slug]);

  return (
    <Page>
      <h1>Single Project Page {project_slug}</h1>
      <NavLink to="/">Back</NavLink>
    </Page>
  );
}
