export type Project = {
  slug: string;
  name: string;
  images: {
    preview: string;
    full: string;
    desktop: string;
    tablet: string;
    mobile: string;
  };
  description: string;
  period: string;
  href: string;
  hrefText: string;
  tags: string[];
};
const PROJECTS_IMAGES_PATH = "/assets/images/projects/";

export const PROJECTS: Project[] = [
  {
    slug: "st-website",
    name: "SimpleTherapy website",
    images: {
      preview: PROJECTS_IMAGES_PATH + "st_website_preview.jpg",
      full: PROJECTS_IMAGES_PATH + "st_website_full.jpg",
      desktop: PROJECTS_IMAGES_PATH + "st_website_desktop.jpg",
      tablet: PROJECTS_IMAGES_PATH + "st_website_tablet.jpg",
      mobile: PROJECTS_IMAGES_PATH + "st_website_mobile.jpg",
    },
    description:
      "SimpleTherapy company website. The website is designed to be simple and easy to use. It is built with Wordpress and Bootstrap. The website is fully responsive and works on all devices.",
    href: "https://simpletherapy.com",
    hrefText: "Visit site",
    period: "2022",
    tags: ["Vanilla JS", "Wordpress", "Bootstrap", "SCSS"],
  },
];
