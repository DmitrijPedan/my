import SocialLinks from "src/components/SocialLinks";
import Page from "src/layout/Page";

function AppContent() {
  return (
    <Page>
      <div className="flex flex-wrap py-10">
        <div className="sticky top-0 w-full self-start lg:w-5/12">
          <div className="">
            <h1 className="mb-4 text-4xl md:text-5xl">Dmitriy Pedan</h1>
            <h2 className="mb-5 text-lg sm:text-xl md:text-2xl">Frontend Engineer</h2>
            <p className="">
              Creating seamless and vibrant web solutions, I&apos;m, ready to bring your digital vision to
              life.
            </p>
            <SocialLinks className="mt-10" />
          </div>
        </div>
        <div className="w-full pl-0 lg:w-7/12 lg:pl-12">
          <div className="">
            <section aria-label="Summary" className="leading-7">
              <p className="mb-4">
                Hello, and welcome to my digital space! I’m a passionate and creative web developer dedicated
                to crafting seamless web experiences. With more than 5 years of hands-on experience in the
                tech industry, my expertise lies in transforming ideas into beautifully designed and
                functionally robust websites and applications.
              </p>
              <p className="mb-4">
                My journey began with a small attempt of customizing a WordPress theme, and it has taken me
                through a fascinating path of constant learning and professional growth. Specializing in
                front-end/back-end development, I&apos;ve honed my skills in JavaScript, always with an eye
                for detail and a commitment to following best practices.
              </p>
              <p className="mb-4">
                In this portfolio, you&apos;ll find a showcase of my work, which includes a range of projects
                from landing pages to interactive web apps. Each project tells a story not just of building a
                product, but of collaborative ideation, iterative development, and ultimately, delivering a
                digital experience that meets and exceeds expectations.
              </p>
              <p className="mb-4">
                I’m excited to continue my journey, and I’m looking for freelance opportunities, full-time
                positions or collaborative projects. Let’s connect to explore how we can create the next
                outstanding web experience together!
              </p>
            </section>
          </div>
        </div>
      </div>
    </Page>
  );
}
export default AppContent;
