import classNames from "classnames";
import React from "react";

function Link({ children, className, ...rest }: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      className={classNames(
        "cursor-pointer text-emerald-500 transition-colors hover:text-emerald-400 dark:text-white dark:hover:text-emerald-500",
        className
      )}
      {...rest}>
      {children}
    </a>
  );
}

export default Link;
