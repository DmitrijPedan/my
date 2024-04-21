import Link from "src/components/Link";
import SocialLinks from "src/components/SocialLinks";
import { GoToProjects } from "src/components/buttons";
import ExperienceCard from "src/components/cards/ExperienceCard";
import ProjectCard from "src/components/cards/ProjectCard";
import { MY_EXPERIENCE } from "src/constants/experience";
import { PROJECTS } from "src/constants/projects";
import { Page } from "src/layout";

export function HomePage() {
  return (
    <Page>
      <div className="flex animate-fade-in-sm flex-wrap">
        <div className="muted-text-color w-full self-start lg:sticky lg:top-20 lg:w-4/12">
          <div className="flex flex-col lg:min-h-[75vh]">
            <h1 className="main-text-color mb-4 text-4xl font-bold md:text-5xl">Dmytro Pedan</h1>
            <h2 className="mb-5 text-lg sm:text-xl md:mb-8 md:text-2xl">Front-end Engineer</h2>
            <p className="">
              Solving complex problems and creating intuitive, dynamic user interfaces. <br />I am ready to
              bring any of your ideas to life.
            </p>
            <SocialLinks className="mt-8 sm:mt-12 lg:mt-auto" />
          </div>
        </div>
        <div className="mt-20 w-full pl-0 lg:mt-0 lg:w-8/12 lg:pl-12">
          <section aria-label="Summary" className="mb-10 leading-7 sm:mb-14 md:mb-20 dark:text-slate-400">
            <h3 className="sr-only">About me</h3>
            <p className="mb-4">
              Hello, and welcome to my digital space! I’m a passionate and creative web developer specializing
              in creating high-quality web applications. With over 5 years of hands-on
              <Link
                aria-label="Go to the Experience section"
                title="Go to the Experience section"
                href="#myExperience"
                className="mx-1">
                experience
              </Link>
              in the tech industry with the talented team at
              <Link
                aria-label="Open Codevery.com in a new tab"
                title="Open Codevery.com in a new tab"
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
              Specializing in front-end/back-end development, I've honed my skills in JavaScript, always with
              an eye for detail and a commitment to following best practices.
            </p>
            <p className="mb-4">
              In this portfolio, you will find a
              <Link
                aria-label="Go to the Projects section"
                title="Go to the Projects section"
                href="#myProjects"
                className="ml-1">
                showcase of my work
              </Link>
              , which includes a range of projects from landing pages to interactive web apps. Each project
              tells a story not just of building a product, but of collaborative ideation, iterative
              development, and ultimately, delivering a digital experience that meets and exceeds
              expectations.
            </p>
          </section>
          <section id="myExperience" className="mb-10 scroll-mt-20 sm:mb-14 md:mb-20">
            <h3 className="main-text-color mb-4 text-center text-2xl font-bold md:text-left">Experience</h3>
            <ul role="list">
              {MY_EXPERIENCE.map((experience) => (
                <li key={experience.link} className="mb-4 md:mb-6">
                  <ExperienceCard experience={experience} />
                </li>
              ))}
            </ul>
          </section>
          <section id="myProjects" className="scroll-mt-20">
            <h3 className="main-text-color mb-4 text-center text-2xl font-bold md:text-left">Portfolio</h3>
            <ul role="list">
              {PROJECTS.filter((project, i) => project.priority).map((project) => (
                <li key={project.slug} className="mb-4 md:mb-6">
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
            <GoToProjects className="mb-2 mt-10" />
          </section>
        </div>
      </div>
    </Page>
  );
}
