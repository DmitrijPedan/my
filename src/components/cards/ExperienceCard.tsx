import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React, { useRef } from "react";
import Link from "src/components/Link";
import Tags from "src/components/Tags";
import type { WorkExperience } from "src/constants/experience";

export type JobCardProps = React.HTMLAttributes<HTMLDivElement> & {
  experience: WorkExperience;
};

function ExperienceCard({ experience, className }: JobCardProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <div
      className={classNames(
        "group relative cursor-default rounded-md border border-gray-100 p-2 shadow-sm sm:p-3 dark:border-slate-800 dark:shadow-none dark:hover:border-slate-800 dark:sm:border-none",
        className
      )}
      onClick={() => {
        linkRef.current?.click();
      }}>
      <div className="absolute left-0 top-0 z-0 h-full w-full rounded-md bg-slate-100 opacity-0 transition-opacity group-hover:opacity-40 dark:bg-slate-800"></div>
      <div className="relative z-10 flex flex-col sm:flex-row">
        <div className="w-3/12">
          <p className="muted-text-color mt-1 font-semibold uppercase sm:mb-0 dark:text-slate-400">
            <span>{experience.from}</span> - <span>{experience.to}</span>
          </p>
        </div>
        <div className="w-9/12">
          <header>
            <h4 onClick={(e) => e.stopPropagation()} aria-label="Company name" className="flex">
              <Link
                href={experience.link}
                innerRef={linkRef}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${experience.company} website in a new tab`}
                className="flex items-center text-xl font-bold">
                <span>{experience.company}</span>
                <ArrowTopRightOnSquareIcon className="mb-1 ml-3 h-5 w-5 shrink-0" />
              </Link>
            </h4>
            <p aria-label="Position in the company" className="text-lg text-black dark:text-white">
              {experience.position}
            </p>
          </header>
          <div
            className="muted-text-color dark:text-slate-400"
            aria-label={`Responsibilities in ${experience.company}`}>
            {experience.responsibilities}
          </div>
          {experience.tags && (
            <footer>
              <Tags
                aria-label={`Tech stack in ${experience.company}`}
                tags={experience.tags}
                className="mt-2"
              />
            </footer>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
