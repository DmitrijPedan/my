export type Project = {
  slug: string;
  name: string;
  priority: boolean;
  images: {
    preview: string;
    full: string;
    desktop: string;
    tablet: string;
    mobile: string;
  };
  description: string;
  period: string;
  role: string;
  href?: string;
  hrefText?: string;
  tags: string[];
};
const PROJECTS_IMAGES_PATH = "/assets/images/projects/";

export const PROJECTS: Project[] = [
  {
    slug: "st-website",
    name: "SimpleTherapy website",
    priority: true,
    images: {
      preview: PROJECTS_IMAGES_PATH + "st_website_preview.jpg",
      full: PROJECTS_IMAGES_PATH + "st_website_full.jpg",
      desktop: PROJECTS_IMAGES_PATH + "st_website_desktop.jpg",
      tablet: PROJECTS_IMAGES_PATH + "st_website_tablet.jpg",
      mobile: PROJECTS_IMAGES_PATH + "st_website_mobile.jpg",
    },
    description:
      "SimpleTherapy company website. The website is designed to be simple and easy to use. It is built with Wordpress and Bootstrap. The website is fully responsive and works on all devices.",
    role: "Full-stack developer",
    href: "https://simpletherapy.com",
    hrefText: "Visit site",
    period: "2022",
    tags: ["Vanilla JS", "Wordpress", "Bootstrap", "SCSS"],
  },
  {
    slug: "hch-cms",
    name: "HeartCore Hotels CMS",
    priority: true,
    images: {
      preview: PROJECTS_IMAGES_PATH + "hch_website_preview.jpg",
      full: PROJECTS_IMAGES_PATH + "hch_website.jpg",
      desktop: PROJECTS_IMAGES_PATH + "hch_site_desktop.jpg",
      tablet: PROJECTS_IMAGES_PATH + "hch_site_tablet.jpg",
      mobile: PROJECTS_IMAGES_PATH + "hch_site_mobile.jpg",
    },
    description:
      "Fully custom CMS for HeartCore Hotels. SEO optimized, lightweight, and fast. The client part is built on Adonis.js as classic web application and the admin part is built on Angular as a SPA. The both parts are fully responsive and works on all devices.",
    role: "Full-stack developer",
    href: "https://www.heartcorehotels.com",
    hrefText: "Visit site",
    period: "2022",
    tags: ["Adonis.js", "Angular", "Typescript", "Bootstrap", "Angular Material IU"],
  },
  {
    slug: "clear-view",
    name: "ClearView",
    priority: true,
    images: {
      preview: PROJECTS_IMAGES_PATH + "clear_view_preview.jpg",
      full: PROJECTS_IMAGES_PATH + "clear_view_full.jpg",
      desktop: PROJECTS_IMAGES_PATH + "clear_view_desktop.jpg",
      tablet: PROJECTS_IMAGES_PATH + "clear_view_tablet.jpg",
      mobile: PROJECTS_IMAGES_PATH + "clear_view_mobile.jpg",
    },
    description:
      "ClearView is a private web application that collects and processes Google search results by saved keywords on a daily basis. The application is built on Adonis.js (backend API) and Angular (frontend part, SPA).",
    period: "2022",
    role: "Front-end developer",
    tags: ["Adonis.js", "Angular", "Typescript", "Angular Material IU"],
  },
  {
    slug: "first-bread",
    name: "First Bread company website (HD-group)",
    priority: true,
    images: {
      preview: PROJECTS_IMAGES_PATH + "first_bread_preview.jpg",
      full: PROJECTS_IMAGES_PATH + "first_bread_full.jpg",
      desktop: PROJECTS_IMAGES_PATH + "first_bread_desktop.jpg",
      tablet: PROJECTS_IMAGES_PATH + "first_bread_tablet.jpg",
      mobile: PROJECTS_IMAGES_PATH + "first_bread_mobile.jpg",
    },
    description:
      "The site represents a company that produces and sells bread. Custom designed theme for Wordpress. SEO optimized and fast. The site is fully responsive and works on all devices.",
    period: "2019",
    role: "Full-stack developer",
    href: "https://hlib.cv.ua",
    hrefText: "Visit site",
    tags: ["Wordpress", "Bootstrap", "SCSS", "Webpack", "npm"],
  },
  {
    slug: "hlebodar",
    name: "Hlebodar company website (HD-group)",
    priority: true,
    images: {
      preview: PROJECTS_IMAGES_PATH + "hlebodar_preview.jpg",
      full: PROJECTS_IMAGES_PATH + "hlebodar_full.jpg",
      desktop: PROJECTS_IMAGES_PATH + "hlebodar_desktop.jpg",
      tablet: PROJECTS_IMAGES_PATH + "hlebodar_tablet.jpg",
      mobile: PROJECTS_IMAGES_PATH + "hlebodar_mobile.jpg",
    },
    description:
      "Multi-language site of Hlebodar company. Custom designed theme for Wordpress. SEO optimized and fast. The site is fully responsive and works on all devices.",
    period: "2019",
    role: "Full-stack developer",
    href: "https://hlibodar.com.ua/en",
    hrefText: "Visit site",
    tags: ["Wordpress", "Bootstrap", "SCSS", "Webpack", "npm"],
  },
  {
    slug: "bread-foy-you",
    name: "Bread4U landing pages (HD-group)",
    priority: true,
    images: {
      preview: PROJECTS_IMAGES_PATH + "bread4U_preview.jpg",
      full: PROJECTS_IMAGES_PATH + "bread4U_full.jpg",
      desktop: PROJECTS_IMAGES_PATH + "bread4U_desktop.jpg",
      tablet: PROJECTS_IMAGES_PATH + "bread4U_tablet.jpg",
      mobile: PROJECTS_IMAGES_PATH + "bread4U_mobile.jpg",
    },
    description:
      "Landing pages for Bread4U company. SEO optimized and fast. The page is fully responsive and works on all devices.",
    period: "2019",
    role: "Front-end developer",
    href: "https://www.bread4u.com.ua",
    hrefText: "Visit site",
    tags: ["Vanilla JS", "Bootstrap", "SCSS", "Webpack", "npm"],
  },
];
