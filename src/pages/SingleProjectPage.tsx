import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import ProjectSummary from "src/components/ProjectSummary";
import { RelatedProjects } from "src/components/RelatedProjects";
import { GoToProjects, HomeButton } from "src/components/buttons";
import DevicesMockupsSection from "src/components/device-mockups/DevicesMockupsSection";
import { PROJECTS } from "src/constants/projects";
import type { Project } from "src/constants/projects";
import { Page } from "src/layout";

export function SingleProjectPage() {
  const { project_slug } = useParams<{ project_slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    const targetProject = PROJECTS.find((project) => project.slug === project_slug);
    if (!targetProject) {
      navigate("/not-found");
    } else {
      setProject(targetProject);
      if (targetProject.relatedProjects) {
        setRelatedProjects(
          PROJECTS.filter((project) => targetProject.relatedProjects?.includes(project.slug))
        );
      }
    }
  }, [project_slug]);

  return (
    <Page>
      {project && (
        <div className="animate-fade-in-sm pb-20">
          <HomeButton className="mb-10" />
          <h1 className="primary-color mb-6 text-4xl">{project.name}</h1>
          <ProjectSummary project={project} className="mb-10" />
          <p className="mb-10">{project.detailedInfo?.fullDescription || project.shortDescription}</p>
          <DevicesMockupsSection detailedInfo={project.detailedInfo} className="mb-10" />
          <RelatedProjects projects={relatedProjects} className="mb-10" />
          <GoToProjects className="mt-10" />
        </div>
      )}
    </Page>
  );
}
