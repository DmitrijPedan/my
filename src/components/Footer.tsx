import classNames from "classnames";
import React from "react";
import Link from "src/components/Link";

function Footer({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      className={classNames("mx-auto flex w-full max-w-7xl flex-col items-center px-2", className)}
      {...rest}>
      <hr className="border-top w-full border-slate-300 dark:border-slate-700" />
      <div className="flex w-full flex-row items-center justify-between py-3 text-slate-700 dark:text-slate-400">
        <p className="mb-2 mr-3 w-5/12 text-sm md:mb-0 md:w-1/3">© 2019 - {new Date().getFullYear()}.</p>
        <p className="w-6/12 text-left text-sm md:w-2/3 md:text-right">
          Developed using{" "}
          <Link
            aria-label="Open Visual Studio Code site in a new tab"
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer">
            Visual Studio Code
          </Link>
          , powered by{" "}
          <Link
            aria-label="Open React site in a new tab"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer">
            React
          </Link>
          , and{" "}
          <Link
            aria-label="Open Tailwind CSS site in a new tab"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer">
            Tailwind CSS
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
