import React from "react";

export type WorkExperience = {
  from: string;
  to: string;
  company: string;
  link: string;
  position: string;
  responsibilities: string | React.ReactNode;
  tags?: string[];
};

export const MY_EXPERIENCE: WorkExperience[] = [
  {
    from: "2019",
    to: "present",
    company: "Codevery LLC",
    link: "https://codevery.com",
    position: "Front-end/Full-stack Engineer",
    responsibilities: (
      <ul className="ml-4 list-disc">
        <li>
          Providing well designed, optimized and efficient code using best software development practices;
        </li>
        <li>Implementing design templates into ready-made solutions, using best HTML/CSS practices;</li>
        <li>Ensuring continuous integration and continuous delivery of products using CI/CD tools;</li>
        <li>Creation and maintenance of software documentation;</li>
        <li>
          Communication with various project stakeholders across marketing, content, design and development to
          understand and execute programming requirements under reasonable timeframes.
        </li>
        <li>
          Resolving complex technical issues, collaborating with team members to identify root causes and
          implementing effective solutions;
        </li>
        <li>
          Support and mentoring for junior developers, conducting regular code reviews and providing
          constructive feedback to team members;
        </li>
      </ul>
    ),
  },
];
