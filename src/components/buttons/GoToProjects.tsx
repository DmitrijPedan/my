import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

export function GoToProjects({
  className,
  children = "Home",
  ...rest
}: React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <NavLink
      aria-label="Go to the Projects page"
      title="Go to the Projects page"
      to="/projects"
      className={classNames(
        "group flex cursor-pointer items-center text-emerald-500 transition-colors hover:text-emerald-400 dark:text-white dark:hover:text-emerald-500",
        className
      )}
      {...rest}>
      <span className="text-lg">View all projects</span>
      <ArrowUpRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
    </NavLink>
  );
}
