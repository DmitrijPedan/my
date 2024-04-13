import { ArrowTopRightOnSquareIcon, LinkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Link from "src/components/Link";
import Tags from "src/components/Tags";
import GoBackButton from "src/components/buttons/GoBackButton";
import { PROJECTS } from "src/constants/projects";
import type { Project } from "src/constants/projects";
import { Page } from "src/layout";

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(PROJECTS);
  }, []);

  return (
    <Page className="max-w-7xl">
      <div className="flex flex-col py-12">
        <table className="table-auto">
          <thead className="border-b border-slate-600  text-left font-bold text-black dark:text-white">
            <Row>
              <Cell>Period</Cell>
              <Cell>Name</Cell>
              <Cell>Role</Cell>
              <Cell>Developed for</Cell>
              <Cell className="hidden sm:block">Tags</Cell>
              <Cell>Link</Cell>
            </Row>
          </thead>
          <tbody>
            {projects.map((project) => (
              <Row key={project.slug} className="muted-text-color group cursor-default transition-colors">
                <Cell>{project.year}</Cell>
                <Cell>
                  {!project.slug ? (
                    <span>{project.name}</span>
                  ) : (
                    <NavLink
                      aria-label={`View more detailed info about ${project.name}`}
                      title={`View more detailed info about ${project.name}`}
                      to={"/projects/" + project.slug}
                      className="flex group-hover:text-emerald-400">
                      <span>{project.name}</span>
                      <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5 shrink-0" />
                    </NavLink>
                  )}
                </Cell>
                <Cell>{project.role}</Cell>
                <Cell>{project.developedFor}</Cell>
                <Cell className="hidden !py-3 sm:block">
                  <Tags tags={project.tags} />
                </Cell>
                <Cell className="">
                  {project.private ? (
                    <span
                      aria-label="This project is private and cannot be presented here"
                      title="This project is private and cannot be presented here"
                      className="text-slate-500">
                      private
                    </span>
                  ) : (
                    <Link
                      aria-label={`Open the ${project.name} an a new tab`}
                      title={`Open the ${project.name} in a new tab`}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex group-hover:text-emerald-400">
                      <span>Visit</span>
                      <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5 shrink-0" />
                    </Link>
                  )}
                </Cell>
              </Row>
            ))}
          </tbody>
        </table>
        <GoBackButton className="mt-8" />
      </div>
    </Page>
  );
}

function Row({ children, className, ...rest }: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className={classNames("", className)} {...rest}>
      {children}
    </tr>
  );
}

function Cell({ children, className, ...rest }: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={classNames("px-1 py-4 align-top", className)} {...rest}>
      <div className="">{children}</div>
    </td>
  );
}
