import classNames from "classnames";
import React from "react";

function Link({
  children,
  className,
  innerRef,
  ...rest
}: React.HTMLProps<HTMLAnchorElement> & {
  innerRef?: React.RefObject<HTMLAnchorElement>;
}) {
  return (
    <a
      ref={innerRef}
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
