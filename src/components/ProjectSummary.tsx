import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React from "react";
import Link from "src/components/Link";
import Tags from "src/components/Tags";
import type { Project } from "src/constants/projects";

function ProjectSummary({ project, className }: { project: Project | null; className?: string }) {
  return project ? (
    <table className={classNames("table-auto", className)}>
      <tbody>
        <Row label="Period">
          <span className="font-bold">{project.year}</span>
        </Row>
        <Row label="Role">
          <span className="font-bold">{project.role}</span>
        </Row>
        <Row label="Developed for">
          <span className="font-bold">{project.developedFor}</span>
        </Row>
        <Row label="Link">
          {project.private ? (
            <span
              aria-label="This project is private and its link cannot be presented here"
              className="text-slate-500">
              This project is private and its link cannot be presented here
            </span>
          ) : (
            <Link
              aria-label={`Open the ${project.name} an a new tab`}
              title={`Open the ${project.name} in a new tab`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex group-hover:text-sky-400">
              <span>Visit</span>
              <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5 shrink-0" />
            </Link>
          )}
        </Row>
        <Row label="Tech stack">
          <Tags tags={project.tags} />
        </Row>
      </tbody>
    </table>
  ) : null;
}

function Row({
  className,
  label,
  children,
  ...rest
}: React.HTMLAttributes<HTMLTableRowElement> & {
  label: string;
}) {
  return (
    <tr className={classNames("", className)} {...rest}>
      <td className="muted-text-color py-1 pr-4 align-top">{label}:</td>
      <td className="main-text-color py-1 align-top">{children}</td>
    </tr>
  );
}

export default ProjectSummary;
