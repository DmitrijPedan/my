import classNames from "classnames";
import React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

function Card({ children, className }: CardProps) {
  return (
    <div
      className={classNames(
        "relative cursor-default rounded-lg p-2 sm:rounded-xl sm:p-3",
        "bg-slate-50 hover:bg-slate-100/80 dark:bg-slate-800/30 dark:hover:bg-slate-800/40",
        className
      )}>
      {children}
    </div>
  );
}

export default Card;
