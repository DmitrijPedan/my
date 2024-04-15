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
    <a ref={innerRef} className={classNames("link-color cursor-pointer", className)} {...rest}>
      {children}
    </a>
  );
}

export default Link;
