import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React, { useRef } from "react";
import Link from "src/components/Link";
import type { TagsProps } from "src/components/Tags";
import Tags from "src/components/Tags";

export type JobCardProps = React.HTMLAttributes<HTMLDivElement> & {
  job: {
    from: string;
    to: string;
    company: string;
    companyHref: string;
    position: string;
    responsibilities: string | React.ReactNode;
    tags?: TagsProps["tags"];
  };
};

function JobCard({ job, className }: JobCardProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <div
      className={classNames(
        "group/item relative cursor-default rounded-md border border-gray-100 p-2 shadow-lg hover:border-emerald-300 sm:p-3 dark:border-slate-800 dark:shadow-none dark:hover:border-slate-800 dark:sm:border-none",
        className
      )}
      onClick={() => {
        linkRef.current?.click();
      }}>
      <div className="absolute left-0 top-0 z-0 h-full w-full rounded-md bg-slate-100 opacity-0 transition-opacity group-hover/item:opacity-40 dark:bg-slate-800"></div>
      <div className="relative z-10 flex flex-col sm:flex-row">
        <div className="w-3/12">
          <p className="mt-1 uppercase sm:mb-0 dark:text-white">
            <span>{job.from}</span> - <span>{job.to}</span>
          </p>
        </div>
        <div className="w-9/12">
          <header>
            <h4
              onClick={(e) => e.stopPropagation()}
              aria-label="Company name"
              className="text-black transition-colors dark:text-white">
              <Link
                href={job.companyHref}
                innerRef={linkRef}
                aria-label={`Visit ${job.company} website`}
                className="flex items-center text-xl font-bold group-hover/item:text-emerald-400">
                <span>{job.company}</span>
                <ArrowTopRightOnSquareIcon className="mb-1 ml-3 h-5 w-5 shrink-0 opacity-30 group-hover/item:text-emerald-400 group-hover/item:opacity-100" />
              </Link>
            </h4>
            <p aria-label="Position in the company" className="text-lg text-black dark:text-white">
              {job.position}
            </p>
          </header>
          <div aria-label={`Responsibilities in ${job.company}`}>{job.responsibilities}</div>
          {job.tags && (
            <footer>
              <Tags aria-label={`Tech stack in ${job.company}`} tags={job.tags} className="mt-2" />
            </footer>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobCard;
