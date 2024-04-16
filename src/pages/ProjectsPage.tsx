import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Link from "src/components/Link";
import Tags from "src/components/Tags";
import { HomeButton } from "src/components/buttons";
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
      <div className="flex animate-fade-in-sm flex-col">
        <table className="table-auto">
          <thead className="muted-border-color border-b text-left font-bold text-black dark:text-white">
            <Row>
              <Cell>Period</Cell>
              <Cell>Name</Cell>
              <Cell className="hidden md:table-cell">Role</Cell>
              <Cell className="hidden sm:table-cell">Developed for</Cell>
              <Cell className="hidden md:table-cell">Tags</Cell>
              <Cell>Link</Cell>
            </Row>
          </thead>
          <tbody>
            {projects.map((project) => (
              <Row key={project.slug} className="muted-text-color group cursor-default transition-colors">
                <Cell>{project.year}</Cell>
                <Cell>
                  <NavLink
                    aria-label={`View more detailed info about ${project.name}`}
                    title={`View more detailed info about ${project.name}`}
                    to={"/projects/" + project.slug}
                    className="link-color flex">
                    <span className="line-clamp-1">{project.name}</span>
                    <ArrowTopRightOnSquareIcon className="mb-1 ml-1 mt-1 h-4 w-4 shrink-0" />
                  </NavLink>
                </Cell>
                <Cell className="hidden md:table-cell">{project.role}</Cell>
                <Cell className="hidden sm:table-cell">{project.developedFor}</Cell>
                <Cell className="hidden max-w-96 !py-3 md:table-cell">
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
                      className="link-color flex items-center">
                      <span>Visit</span>
                      <ArrowTopRightOnSquareIcon className="ml-2 inline h-4 w-4 shrink-0" />
                    </Link>
                  )}
                </Cell>
              </Row>
            ))}
          </tbody>
        </table>
        <HomeButton className="mt-10" />
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
    <td className={classNames("px-2 py-4 align-top", className)} {...rest}>
      <div className="">{children}</div>
    </td>
  );
}
