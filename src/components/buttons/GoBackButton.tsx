import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function GoBackButton({ className, children = "Back", ...rest }: React.HTMLAttributes<HTMLAnchorElement>) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavLink
      to="/"
      onClick={(e) => {
        e.preventDefault();
        const canGoBack = location.key !== "default";
        const href = canGoBack ? -1 : "/";
        navigate(href as string);
      }}
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

export default GoBackButton;
