import { HomeIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { NavLink, useMatches } from "react-router-dom";

function BreadCrumbs() {
  const matches = useMatches();

  return (
    <ol className="flex items-center">
      <li className="mr-2 flex items-center">
        <NavLink
          to="/"
          className={
            (classNames("link-color group flex items-center text-lg font-bold"),
            ({ isActive }) => (isActive ? "primary-text-color" : "link-color"))
          }>
          <HomeIcon className="mr-2 inline-block h-6 w-6" />
        </NavLink>
        {/* {crumbs.length > 0 && <span className="mx-2">/</span>} */}
      </li>
      {matches
        .filter((match: any) => Boolean(match.handle?.breadCrumb))
        .map((match: any) => match.handle.breadCrumb(match.params))
        .map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2">/</span>}
            {crumb}
          </li>
        ))}
    </ol>
  );
}

export default BreadCrumbs;
