import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Link from "src/components/Link";
import ProjectSummary from "src/components/ProjectSummary";
import Tags from "src/components/Tags";
import GoBackButton from "src/components/buttons/GoBackButton";
import { PROJECTS } from "src/constants/projects";
import type { Project } from "src/constants/projects";
import { Page } from "src/layout";

export function SingleProjectPage() {
  const { project_slug } = useParams<{ project_slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const targetProject = PROJECTS.find((project) => project.slug === project_slug);
    if (!targetProject) {
      navigate("/not-found");
    } else {
      console.log(targetProject);
      setProject(targetProject);
    }
  }, [project_slug]);

  return (
    <Page>
      {project && (
        <div>
          <GoBackButton className="mb-10" />
          <h1 className="primary-color mb-6 text-4xl">{project.name}</h1>
          <ProjectSummary project={project} className="mb-10" />
          <p>{project.detailedInfo?.fullDescription || project.shortDescription}</p>
        </div>
      )}
    </Page>
  );
}
