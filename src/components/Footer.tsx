import classNames from "classnames";
import React from "react";
import Link from "src/components/Link";

function Footer({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      className={classNames("mx-auto flex w-full max-w-6xl flex-col items-center", className)}
      {...rest}>
      <hr className="border-top w-full  border-slate-300 dark:border-slate-700" />
      <div className="flex w-full flex-col flex-wrap items-center justify-between p-3 text-slate-700 md:flex-row dark:text-slate-400">
        <p className="mb-2 mr-3 text-sm md:mb-0">© 2019 - {new Date().getFullYear()}.</p>
        <p className="text-center text-sm">
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
