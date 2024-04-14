import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import Tags from "src/components/Tags";
import type { Project } from "src/constants/projects";

interface RelatedProjectsProps {
  projects: Project[];
  className?: string;
}

export function RelatedProjects({ projects, className }: RelatedProjectsProps) {
  return projects?.length ? (
    <div className={classNames("", className)}>
      <h4 className="main-text-color mb-2 text-lg">Related projects:</h4>
      <table className={classNames("table-full", className)}>
        <tbody>
          {projects.map((project) => (
            <Row key={project.slug} project={project}></Row>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
}

function Row({
  className,
  project,
  ...rest
}: React.HTMLAttributes<HTMLTableRowElement> & {
  project: Project;
}) {
  return (
    <tr className={classNames("group ", className)} {...rest}>
      <td className="muted-text-color py-1 pr-4 align-top">{project.year}:</td>
      <td className="main-text-color py-1 align-top">
        <NavLink
          aria-label={`View more detailed info about ${project.name}`}
          title={`View more detailed info about ${project.name}`}
          to={"/projects/" + project.slug}
          className="transition-colors group-hover:text-emerald-400">
          <span>{project.name}</span>
        </NavLink>
      </td>
      <td className="px-2 align-top">
        <Tags tags={project.tags} />
      </td>
    </tr>
  );
}

export default RelatedProjects;
