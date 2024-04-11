import classNames from "classnames";
import React from "react";
import Link from "src/components/Link";

function Footer({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      className={classNames(
        "flex flex-col flex-wrap items-center justify-center p-2 text-slate-700 md:flex-row  dark:text-slate-400",
        className
      )}
      {...rest}>
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
    </footer>
  );
}

export default Footer;
