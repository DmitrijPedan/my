import { ArrowUpRightIcon, LinkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React, { useRef } from "react";
import Link from "src/components/Link";
import Tags from "src/components/Tags";
import type { Project } from "src/constants/projects";

export type ProjectCardProps = React.HTMLAttributes<HTMLDivElement> & {
  project: Project;
};

function ProjectCard({ project, className }: ProjectCardProps) {
  const descriptionLinkRef = useRef<HTMLAnchorElement>(null);
  const projectLinkRef = useRef<HTMLAnchorElement>(null);

  return (
    <div
      className={classNames(
        "group/item relative cursor-default rounded-md border border-gray-200 p-2 shadow-lg hover:border-emerald-200 sm:p-3 dark:border-slate-800 dark:shadow-none dark:hover:border-slate-800 dark:sm:border-none",
        className
      )}
      onClick={() => {
        descriptionLinkRef.current?.click();
      }}>
      <div className="absolute left-0 top-0 z-0 h-full w-full rounded-md bg-emerald-100 opacity-0 transition-opacity group-hover/item:opacity-40 dark:bg-slate-800"></div>
      <div className="relative z-10 flex flex-col sm:flex-row">
        <div className="w-3/12">
          <div className="relative mr-2 mt-1.5 overflow-hidden rounded-sm">
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black	opacity-10 transition-opacity group-hover/item:opacity-0"></div>
            <img className="relative z-0 max-w-full" src={project.images.preview} alt={project.name} />
          </div>
        </div>
        <div className="w-9/12">
          <header>
            <h4 aria-label="Company name" className="flex items-center">
              <Link
                innerRef={descriptionLinkRef}
                href={"/projects/" + project.slug}
                aria-label={`See more detailed info about ${project.name}`}
                className="text-xl font-bold text-black group-hover/item:text-emerald-400 dark:text-white">
                {project.name}
              </Link>
              <ArrowUpRightIcon className="ml-3 h-4 w-4 opacity-30 transition-opacity group-hover/item:opacity-100" />
            </h4>
          </header>
          <div aria-label="Project description">{project.description}</div>
          <div aria-label={`Link to the ${project.name}`} onClick={(e) => e.stopPropagation()}>
            <Link
              innerRef={projectLinkRef}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center opacity-30 transition-all group-hover/item:opacity-100">
              <span>{project.hrefText}</span>
              <span>
                <LinkIcon className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
          <footer>
            <Tags
              aria-label={`Used tech stack in ${project.name} project`}
              tags={project.tags}
              className="mt-2"
            />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
