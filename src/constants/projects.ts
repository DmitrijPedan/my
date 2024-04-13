export type Project = {
  name: string;
  shortDescription: string;
  preview: string;
  slug?: string;
  year: number;
  private: boolean;
  priority: boolean;
  developedFor: string;
  role: string;
  tags: string[];
  link?: string;
  detailedInfo?: {
    fullDescription: string;
    fillImage: string;
    devices?: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
    gallery?: string[];
  };
};
const PROJECTS_IMAGES_PATH = "/assets/images/projects/";

export const PROJECTS: Project[] = [
  {
    slug: "st-video-app",
    name: "SimpleTherapy video app",
    shortDescription:
      "An application for scheduled video meetings between users and their therapist. The application can be used directly from the link or embedded via iframe.",
    preview: PROJECTS_IMAGES_PATH + "st_website_preview.jpg",
    year: 2024,
    private: true,
    priority: true,
    developedFor: "SimpleTherapy inc.",
    role: "Full-stack",
    tags: ["Typescript", "Next.js", "React", "Zoom SDK", "Tailwind"],
  },
  {
    slug: "st-website",
    name: "SimpleTherapy website",
    shortDescription:
      "SimpleTherapy company website. The website is designed to be simple and easy to use. It is built with Wordpress and Bootstrap. The website is fully responsive and works on all devices.",
    preview: PROJECTS_IMAGES_PATH + "st_website_preview.jpg",
    year: 2022,
    private: false,
    priority: true,
    developedFor: "SimpleTherapy inc.",
    role: "Full-stack",
    link: "https://simpletherapy.com",
    tags: ["Vanilla JS", "Wordpress", "Bootstrap", "SCSS", "Webpack", "npm"],
  },
  {
    slug: "hch-cms",
    name: "HeartCore Hotels CMS",
    shortDescription:
      "Fully custom CMS for HeartCore Hotels. SEO optimized, lightweight, and fast. The client part is built on Adonis.js as classic web application and the admin part is built on Angular as a SPA. The both parts are fully responsive and works on all devices.",
    preview: PROJECTS_IMAGES_PATH + "hch_website_preview.jpg",
    year: 2022,
    private: false,
    priority: true,
    developedFor: "HeartCore Hotels",
    role: "Full-stack",
    link: "https://www.heartcorehotels.com",
    tags: ["Adonis.js", "Angular", "Typescript", "Bootstrap", "Angular Material IU"],
  },
  {
    slug: "clear-view",
    name: "ClearView",
    shortDescription:
      "ClearView is a private web application that collects and processes Google search results by saved keywords on a daily basis. The application is built on Adonis.js (backend API) and Angular (frontend part, SPA).",
    preview: PROJECTS_IMAGES_PATH + "clear_view_preview.jpg",
    year: 2022,
    private: true,
    priority: true,
    developedFor: "Private project",
    role: "Front-end",
    tags: ["Adonis.js", "Angular", "Typescript", "Angular Material IU"],
  },
  {
    slug: "first-bread",
    name: "First Bread website",
    shortDescription:
      "The site represents a company that produces and sells bread. Custom designed theme for Wordpress. SEO optimized and fast.",
    preview: PROJECTS_IMAGES_PATH + "first_bread_preview.jpg",
    year: 2019,
    private: false,
    priority: true,
    role: "Full-stack",
    developedFor: "HD-group",
    link: "https://hlib.cv.ua",
    tags: ["Wordpress", "Bootstrap", "SCSS", "Webpack", "npm"],
  },
  {
    slug: "hlebodar",
    name: "Hlebodar website",
    shortDescription:
      "Multi-language site of Hlebodar company. Custom designed theme for Wordpress. SEO optimized and fast. The site is fully responsive and works on all devices.",
    preview: PROJECTS_IMAGES_PATH + "hlebodar_preview.jpg",
    year: 2019,
    private: false,
    priority: true,
    role: "Full-stack",
    developedFor: "HD-group",
    link: "https://hlibodar.com.ua/en",
    tags: ["Wordpress", "Bootstrap", "SCSS", "Webpack", "npm"],
  },
  {
    slug: "bread-foy-you",
    name: "Bread4U landing pages",
    shortDescription:
      "Landing pages for Bread4U company. SEO optimized and fast. The page is fully responsive and works on all devices.",
    preview: PROJECTS_IMAGES_PATH + "bread4U_preview.jpg",
    year: 2019,
    private: false,
    priority: true,
    role: "Front-end",
    developedFor: "HD-group",
    link: "https://www.bread4u.com.ua",
    tags: ["Wordpress", "Bootstrap", "SCSS", "Webpack", "npm"],
  },
];
