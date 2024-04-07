import classNames from "classnames";
import React from "react";

function BorderAnimatedContainer({ children, className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className={classNames("border-animation", className)}>
      <hr className="line horizontal" />
      <hr className="line vertical" />
      {children}
    </div>
  );
}

export default BorderAnimatedContainer;
