import classNames from "classnames";
import React from "react";
import Link from "src/components/Link";
import { GithubIcon } from "src/components/icons";

function Footer({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      className={classNames("mx-auto flex w-full max-w-7xl flex-col items-center px-2", className)}
      {...rest}>
      <hr className="border-top w-full border-slate-300 dark:border-slate-700" />
      <div className="flex w-full flex-col items-center justify-center py-3 text-slate-700 md:flex-row md:justify-between dark:text-slate-400">
        <div className="flex">
          <Link
            aria-label="See this project on GitHub"
            href="https://github.com/DmitrijPedan/DmitrijPedan.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 inline-block fill-white text-white">
            <GithubIcon className="h-6 w-6 md:h-5 md:w-4" />
          </Link>
          <p className="text-center text-sm">
            <span>Developed using </span>
            <Link
              aria-label="Open Visual Studio Code site in a new tab"
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer">
              Visual Studio Code
            </Link>
            <span>, powered by </span>
            <Link
              aria-label="Open React site in a new tab"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer">
              React
            </Link>
            <span>, and </span>
            <Link
              aria-label="Open Tailwind CSS site in a new tab"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer">
              Tailwind CSS
            </Link>
          </p>
        </div>
        <p className="ml-3 mt-2 text-sm md:mt-0">© 2019 - {new Date().getFullYear()}.</p>
      </div>
    </footer>
  );
}

export default Footer;
