import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import ThemeSelector from "src/components/ThemeSelector";

export type HeaderProps = {
  backTo?: string;
  backText?: string;
};

function Header({ backTo, backText }: HeaderProps) {
  return (
    <header className="container sticky top-0 z-50 mx-auto flex items-start justify-between backdrop-blur-sm">
      {backTo && (
        <div className="flex h-10 items-end">
          <NavLink
            to={backTo}
            className="group flex items-center text-lg font-bold text-black transition-colors hover:text-emerald-500 dark:text-white">
            <ArrowLongLeftIcon className="mr-2 inline-block h-6 w-6 transition-transform group-hover:-translate-x-1" />
            <span>{backText || "Back"}</span>
          </NavLink>
        </div>
      )}
      <div className="ml-auto rounded-b-lg border bg-gray-100 px-4 py-1 shadow-md dark:border-none dark:bg-slate-700 dark:shadow-none">
        <ThemeSelector />
      </div>
    </header>
  );
}

export default Header;
