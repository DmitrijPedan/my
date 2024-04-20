import { ArrowTopRightOnSquareIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Link from "src/components/Link";
import Tags from "src/components/Tags";
import Card from "src/components/cards/Card";
import type { Project } from "src/constants/projects";

export type ProjectCardProps = React.HTMLAttributes<HTMLDivElement> & {
  project: Project;
};

function ProjectCard({ project, className }: ProjectCardProps) {
  const descriptionLinkRef = useRef<HTMLAnchorElement>(null);
  const projectLinkRef = useRef<HTMLAnchorElement>(null);

  return (
    <Card className={className}>
      <div className="relative z-10 flex flex-col sm:flex-row">
        <div className="hidden w-3/12 sm:block">
          <div className="relative mr-4 mt-1.5 overflow-hidden rounded-md group-hover:border-gray-300 dark:border-none">
            <img className="relative z-0 max-w-full" src={project.preview} alt={project.name} />
          </div>
        </div>
        <div className="w-full sm:w-9/12">
          <header>
            <h4
              onClick={(e) => e.stopPropagation()}
              aria-label="Company name"
              className="flex text-xl font-bold">
              {project.slug ? (
                <NavLink
                  to={"/projects/" + project.slug}
                  ref={descriptionLinkRef}
                  aria-label={`See more detailed info about ${project.name}`}
                  title={`See more detailed info about ${project.name}`}
                  className="link-color dark:black">
                  <span>{project.name}</span>
                  <ArrowUpRightIcon className="mb-1 ml-1 inline h-4 w-4 shrink-0 transition-transform md:group-hover:-translate-y-px md:group-hover:translate-x-px" />
                </NavLink>
              ) : (
                <span>{project.name}</span>
              )}
            </h4>
          </header>
          <p aria-label="Project description" className="muted-text-color dark:text-slate-400">
            {project.shortDescription}
          </p>
          <div className="my-1">
            <span className="mr-2 dark:text-slate-400">Role:</span>
            <span className="dark:text-white">{project.role}</span>
          </div>
          {project.link && !project.private && (
            <div onClick={(e) => e.stopPropagation()}>
              <Link
                innerRef={projectLinkRef}
                aria-label={`Open ${project.name} resource in a new tab`}
                title={`Open ${project.name} resource in a new tab`}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:group-hover:opacity-100 sm:dark:opacity-30">
                <span>Visit</span>
                <span>
                  <ArrowTopRightOnSquareIcon className="mb-1 ml-2 inline h-4 w-4" />
                </span>
              </Link>
            </div>
          )}
          <footer>
            <Tags
              aria-label={`Used tech stack in ${project.name} project`}
              tags={project.tags}
              className="mt-2"
            />
          </footer>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
