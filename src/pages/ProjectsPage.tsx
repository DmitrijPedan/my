import ProjectCard from "src/components/cards/ProjectCard";
import { PROJECTS } from "src/constants/projects";
import { Page } from "src/layout";

export function ProjectsPage() {
  return (
    <Page headerProps={{ backTo: "/", backText: "Home" }}>
      <div className="flex flex-col pt-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Page>
  );
}
