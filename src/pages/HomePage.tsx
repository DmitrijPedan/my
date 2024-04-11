import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import Link from "src/components/Link";
import SocialLinks from "src/components/SocialLinks";
import JobCard from "src/components/cards/JobCard";
import ProjectCard from "src/components/cards/ProjectCard";
import { MY_EXPERIENCE } from "src/constants/experience";
import { PROJECTS } from "src/constants/projects";
import { Page } from "src/layout";

export function HomePage() {
  return (
    <Page>
      <div className="flex flex-wrap py-10">
        <div className="w-full self-start lg:sticky lg:top-8 lg:w-5/12">
          <div className="flex flex-col lg:min-h-[80vh]">
            <h1 className="mb-4 text-4xl md:text-5xl">Dmitriy Pedan</h1>
            <h2 className="mb-5 text-lg sm:text-xl md:text-2xl">Frontend Engineer</h2>
            <p className="">
              Creating seamless and vibrant web solutions, I&apos;m, ready to bring your digital vision to
              life.
            </p>
            <SocialLinks className="mt-8 sm:mt-12 lg:mt-auto" />
          </div>
        </div>
        <div className="mt-20 w-full pl-0 lg:mt-0 lg:w-7/12 lg:pl-12">
          <section aria-label="Summary" className="leading-7 lg:pl-2 dark:text-slate-400">
            <h3 className="sr-only">About me</h3>
            <p className="mb-4">
              Hello, and welcome to my digital space! I’m a passionate and creative web developer dedicated to
              crafting seamless web experiences. With more than 5 years of hands-on experience in the tech
              industry alongside the talented team at
              <Link
                aria-label="Open Codevery.com in a new tab"
                href="https://codevery.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1">
                Codevery LLC
              </Link>
              , my expertise lies in transforming ideas into beautifully designed and functionally robust
              websites and applications.
            </p>
            <p className="mb-4">
              Specializing in front-end/back-end development, I&apos;ve honed my skills in JavaScript, always
              with an eye for detail and a commitment to following best practices.
            </p>
            <p className="mb-4">
              In this portfolio, you&apos;ll find a
              <Link aria-label="Go to the Projects section" href="#myProjects" className="ml-1">
                showcase of my work
              </Link>
              , which includes a range of projects from landing pages to interactive web apps. Each project
              tells a story not just of building a product, but of collaborative ideation, iterative
              development, and ultimately, delivering a digital experience that meets and exceeds
              expectations.
            </p>
            <p className="mb-4">
              I’m excited to continue my journey, and I’m looking for freelance opportunities, full-time
              positions or collaborative projects. Let’s connect to explore how we can create the next
              outstanding web experience together!
            </p>
          </section>
          <section id="myExperience" className="mt-10">
            <h3 className="sr-only">My job experience</h3>
            <ul role="list">
              {MY_EXPERIENCE.map((job) => (
                <li key={job.companyHref} className="mb-4">
                  <JobCard job={job} />
                </li>
              ))}
            </ul>
          </section>
          <section id="myProjects" className="mt-10 ">
            <h3 className="sr-only">My projects</h3>
            <ul role="list">
              {PROJECTS.map((project) => (
                <li key={project.href} className="mb-4">
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
            <NavLink
              aria-label="Go to the Projects page"
              to="/projects"
              className="group mt-4 flex cursor-pointer items-center text-right text-emerald-500 transition-colors hover:text-emerald-400 dark:text-white dark:hover:text-emerald-500">
              <span>View all projects</span>
              <ArrowUpRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
            </NavLink>
          </section>
        </div>
      </div>
    </Page>
  );
}
