import classNames from "classnames";
import React from "react";

export type TagsProps = React.HTMLAttributes<HTMLUListElement> & {
  tags?: string[];
};

function Tags({ tags, className, ...rest }: TagsProps) {
  return tags ? (
    <ul className={classNames("-mx-1 flex flex-wrap", className)} {...rest}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="primary-text-color m-1 rounded-full bg-gray-100 px-3 py-1 text-sm shadow-sm dark:bg-slate-800 dark:shadow-none">
          {tag}
        </li>
      ))}
    </ul>
  ) : null;
}
export default Tags;
