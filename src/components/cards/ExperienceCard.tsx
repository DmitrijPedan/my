import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React, { useRef } from "react";
import Link from "src/components/Link";
import Tags from "src/components/Tags";
import Card from "src/components/cards/Card";
import type { WorkExperience } from "src/constants/experience";

export type JobCardProps = React.HTMLAttributes<HTMLDivElement> & {
  experience: WorkExperience;
};

function ExperienceCard({ experience, className }: JobCardProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <Card className={className}>
      <div className="relative z-10 flex flex-col sm:flex-row">
        <div className="mb-2 w-full sm:w-3/12">
          <p className="muted-text-color mt-1 font-semibold uppercase sm:mb-0 dark:text-slate-400">
            <span>{experience.from}</span> - <span>{experience.to}</span>
          </p>
        </div>
        <div className="w-full sm:w-9/12">
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
    </Card>
  );
}

export default ExperienceCard;
