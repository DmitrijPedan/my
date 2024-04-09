import classNames from "classnames";
import React from "react";

export type SkillsProps = React.HTMLAttributes<HTMLUListElement> & {
  skills: string[];
};

function Skills({ skills, className, ...rest }: SkillsProps) {
  return (
    <ul className={classNames("-mx-1 flex flex-wrap", className)} {...rest}>
      {skills.map((skill) => (
        <li
          key={skill}
          className="m-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-emerald-600 shadow-md dark:bg-slate-800 dark:text-emerald-500 dark:shadow-none">
          {skill}
        </li>
      ))}
    </ul>
  );
}
export default Skills;
