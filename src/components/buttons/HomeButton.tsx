import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

export function HomeButton({
  className,
  children = "Home",
  ...rest
}: React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <NavLink
      to="/"
      className={classNames(
        "group flex items-center text-xl font-bold text-black transition-colors hover:text-emerald-500 dark:text-white",
        className
      )}
      {...rest}>
      <ArrowLongLeftIcon className="mr-2 inline-block h-7 w-7 transition-transform group-hover:-translate-x-1" />
      <span>{children}</span>
    </NavLink>
  );
}
