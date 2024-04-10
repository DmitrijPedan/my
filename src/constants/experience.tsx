import React from "react";

type Experience = {
  from: string;
  to: string;
  company: string;
  companyHref: string;
  position: string;
  responsibilities: string | React.ReactNode;
  tags?: string[];
};

export const MY_EXPERIENCE: Experience[] = [
  {
    from: "2019",
    to: "present",
    company: "Codevery LLC",
    companyHref: "https://codevery.com",
    position: "Frontend Engineer",
    responsibilities: (
      <ul>
        <li>Developing and maintaining websites and web applications</li>
        <li>Collaborating with designers to create responsive and interactive web designs</li>
        <li>Optimizing web applications for maximum speed and scalability</li>
        <li>Writing clean, maintainable, and efficient code</li>
        <li>Participating in code reviews and team meetings</li>
      </ul>
    ),
  },
];
