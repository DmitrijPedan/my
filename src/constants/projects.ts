export type Project = {
  name: string;
  shortDescription: string;
  preview: string;
  slug: string;
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
  relatedProjects?: string[];
};
const PROJECTS_IMAGES_PATH = "/assets/images/projects/";

export const PROJECTS: Project[] = [
  {
    slug: "st-video",
    name: "SimpleTherapy video application",
    shortDescription:
      "An application for scheduled video meetings between users and their therapist. The application can be used directly from the link or embedded via iframe.",
    preview: PROJECTS_IMAGES_PATH + "/st-video/" + "preview.webp",
    year: 2024,
    private: true,
    priority: true,
    developedFor: "SimpleTherapy inc.",
    role: "Full-stack",
    tags: ["TypeScript", "Next.js", "React", "Twilio SDK", "AWS", "Tailwind CSS"],
    detailedInfo: {
      fillImage: PROJECTS_IMAGES_PATH + "/st-video/" + "full.webp",
      fullDescription:
        "An application for scheduled video meetings between users and their therapist. The application can be used directly from the link or embedded via iframe.",
      devices: {
        desktop: PROJECTS_IMAGES_PATH + "/st-video/" + "desktop.webp",
        tablet: PROJECTS_IMAGES_PATH + "/st-video/" + "tablet.webp",
        mobile: PROJECTS_IMAGES_PATH + "/st-video/" + "mobile.webp",
      },
    },
    relatedProjects: ["st-website", "st-booking", "st-ref"],
  },
  {
    slug: "st-ref",
    name: "SimpleTherapy referral system",
    shortDescription:
      "A referral system for SimpleTherapy. The system allows users to refer their friends to the service and get a discount for the next session. The system is built on React",
    preview: PROJECTS_IMAGES_PATH + "/st-ref/" + "preview.webp",
    year: 2023,
    private: true,
    priority: true,
    developedFor: "SimpleTherapy inc.",
    role: "Front-end",
    tags: ["TypeScript", "React"],
    detailedInfo: {
      fillImage: PROJECTS_IMAGES_PATH + "/st-ref/" + "full.webp",
      fullDescription:
        "A referral system for SimpleTherapy. The system allows users to refer their friends to the service and get a discount for the next session. The system is built on React",
      devices: {
        desktop: PROJECTS_IMAGES_PATH + "/st-ref/" + "desktop.webp",
        tablet: PROJECTS_IMAGES_PATH + "/st-ref/" + "tablet.webp",
        mobile: PROJECTS_IMAGES_PATH + "/st-ref/" + "mobile.webp",
      },
    },
    relatedProjects: ["st-website", "st-video", "st-booking"],
  },
  {
    slug: "st-website",
    name: "SimpleTherapy website",
    shortDescription:
      "SimpleTherapy company website. The website is designed to be simple and easy to use. It is built with Wordpress and Bootstrap. The website is fully responsive and works on all devices.",
    preview: PROJECTS_IMAGES_PATH + "/st-website/" + "preview.webp",
    year: 2022,
    private: false,
    priority: true,
    developedFor: "SimpleTherapy inc.",
    role: "Full-stack",
    link: "https://simpletherapy.com",
    tags: ["JavaScript", "Wordpress", "Bootstrap", "SCSS", "Webpack", "npm"],
    detailedInfo: {
      fillImage: PROJECTS_IMAGES_PATH + "/st-website/" + "full.webp",
      fullDescription:
        "SimpleTherapy company website. The website is designed to be simple and easy to use. It is built with Wordpress and Bootstrap. The website is fully responsive and works on all devices.",
      devices: {
        desktop: PROJECTS_IMAGES_PATH + "/st-website/" + "desktop.webp",
        tablet: PROJECTS_IMAGES_PATH + "/st-website/" + "tablet.webp",
        mobile: PROJECTS_IMAGES_PATH + "/st-website/" + "mobile.webp",
      },
    },
    relatedProjects: ["st-booking", "st-video", "st-ref"],
  },
  {
    slug: "st-booking",
    name: "SimpleTherapy booking system",
    shortDescription:
      "Booking system for SimpleTherapy. The system allows users to book a session with a therapist. The system is based on open source Cal.Com software. The system is customized for the needs of SimpleTherapy.",
    preview: PROJECTS_IMAGES_PATH + "/st-booking/" + "full.webp",
    year: 2022,
    private: false,
    priority: true,
    developedFor: "SimpleTherapy inc.",
    role: "Full-stack",
    tags: ["TypeScript", "Next.js", "React", "Postgres", "Cal.Com"],
    detailedInfo: {
      fillImage: PROJECTS_IMAGES_PATH + "/st-booking/" + "preview.webp",
      fullDescription:
        "Booking system for SimpleTherapy. The system allows users to book a session with a therapist. The system is based on open source Cal.Com software. The system is customized for the needs of SimpleTherapy.",
      devices: {
        desktop: PROJECTS_IMAGES_PATH + "/st-booking/" + "desktop.webp",
        tablet: PROJECTS_IMAGES_PATH + "/st-booking/" + "tablet.webp",
        mobile: PROJECTS_IMAGES_PATH + "/st-booking/" + "mobile.webp",
      },
    },
    relatedProjects: ["st-website", "st-video", "st-ref"],
  },
  {
    slug: "hch-site",
    name: "HeartCore Hotels",
    shortDescription:
      "Fully custom CMS for HeartCore Hotels. SEO optimized, lightweight, and fast. The client part is built on Adonis.js as classic web application and the admin part is built on Angular as a SPA. The both parts are fully responsive and works on all devices.",
    preview: PROJECTS_IMAGES_PATH + "/hch-site/" + "preview.webp",
    year: 2022,
    private: false,
    priority: true,
    developedFor: "HeartCore Hotels Website",
    role: "Full-stack",
    link: "https://www.heartcorehotels.com",
    tags: ["Adonis.js", "Angular", "Typescript", "Bootstrap", "Angular Material IU"],
    detailedInfo: {
      fillImage: PROJECTS_IMAGES_PATH + "/hch-site/" + "full.webp",
      fullDescription:
        "Fully custom CMS for HeartCore Hotels. SEO optimized, lightweight, and fast. The client part is built on Adonis.js as classic web application and the admin part is built on Angular as a SPA. The both parts are fully responsive and works on all devices.",
      devices: {
        desktop: PROJECTS_IMAGES_PATH + "/hch-site/" + "desktop.webp",
        tablet: PROJECTS_IMAGES_PATH + "/hch-site/" + "tablet.webp",
        mobile: PROJECTS_IMAGES_PATH + "/hch-site/" + "mobile.webp",
      },
    },
    relatedProjects: ["hch-admin"],
  },
  {
    slug: "hch-admin",
    name: "HeartCore Hotels CMS",
    shortDescription:
      "Fully custom CMS for HeartCore Hotels. SEO optimized, lightweight, and fast. The client part is built on Adonis.js as classic web application and the admin part is built on Angular as a SPA. The both parts are fully responsive and works on all devices.",
    preview: PROJECTS_IMAGES_PATH + "/hch-admin/" + "preview.webp",
    year: 2022,
    private: true,
    priority: false,
    developedFor: "HeartCore Hotels",
    role: "Full-stack",
    tags: ["Angular", "TypeScript", "Angular Material IU", "REST API"],
    detailedInfo: {
      fillImage: PROJECTS_IMAGES_PATH + "/hch-admin/" + "full.webp",
      fullDescription:
        "Fully custom CMS for HeartCore Hotels. SEO optimized, lightweight, and fast. The client part is built on Adonis.js as classic web application and the admin part is built on Angular as a SPA. The both parts are fully responsive and works on all devices.",
      devices: {
        desktop: PROJECTS_IMAGES_PATH + "/hch-admin/" + "desktop.webp",
        tablet: PROJECTS_IMAGES_PATH + "/hch-admin/" + "tablet.webp",
        mobile: PROJECTS_IMAGES_PATH + "/hch-admin/" + "mobile.webp",
      },
    },
    relatedProjects: ["hch-site"],
  },
  {
    slug: "clear-view",
    name: "ClearView",
    shortDescription:
      "ClearView is a private web application that collects and processes Google search results by saved keywords on a daily basis. The application is built on Adonis.js (backend API) and Angular (frontend part, SPA).",
    preview: PROJECTS_IMAGES_PATH + "/clear-view/" + "preview.webp",
    year: 2022,
    private: true,
    priority: true,
    developedFor: "Private client",
    role: "Front-end",
    tags: ["Adonis.js", "Angular", "Typescript", "Angular Material IU"],
    detailedInfo: {
      fillImage: PROJECTS_IMAGES_PATH + "/clear-view/" + "full.webp",
      fullDescription:
        "ClearView is a private web application that collects and processes Google search results by saved keywords on a daily basis. The application is built on Adonis.js (backend API) and Angular (frontend part, SPA).",
      devices: {
        desktop: PROJECTS_IMAGES_PATH + "/clear-view/" + "desktop.webp",
        tablet: PROJECTS_IMAGES_PATH + "/clear-view/" + "tablet.webp",
        mobile: PROJECTS_IMAGES_PATH + "/clear-view/" + "mobile.webp",
      },
    },
  },
  {
    slug: "hailopay",
    name: "Hailopay fundraising platform",
    shortDescription:
      "Hailopay is a fundraising platform that allows users to create fundraising campaigns and collect donations. The platform is built on Angular (frontend part, SPA).",
    preview: PROJECTS_IMAGES_PATH + "/hailopay/" + "preview.webp",
    year: 2022,
    private: false,
    priority: false,
    developedFor: "Javelin",
    link: "https://hailopay.ie",
    role: "Front-end",
    tags: ["TypeScript", "Angular", "Angular Universal", "Angular Material IU"],
    detailedInfo: {
      fillImage: PROJECTS_IMAGES_PATH + "/hailopay/" + "full.webp",
      fullDescription:
        "Hailopay is a fundraising platform that allows users to create fundraising campaigns and collect donations. The platform is built on Angular (frontend part, SPA).",
      devices: {
        desktop: PROJECTS_IMAGES_PATH + "/hailopay/" + "desktop.webp",
        tablet: PROJECTS_IMAGES_PATH + "/hailopay/" + "tablet.webp",
        mobile: PROJECTS_IMAGES_PATH + "/hailopay/" + "mobile.webp",
      },
    },
  },
  {
    slug: "first-bread",
    name: "First Bread website",
    shortDescription:
      "The site represents a company that produces and sells bread. Custom designed theme for Wordpress. SEO optimized and fast.",
    preview: PROJECTS_IMAGES_PATH + "/first-bread/" + "preview.webp",
    year: 2019,
    private: false,
    priority: true,
    role: "Full-stack",
    developedFor: "HD-group",
    link: "https://hlib.cv.ua",
    tags: ["Wordpress", "Bootstrap", "SCSS", "Webpack", "npm"],
    detailedInfo: {
      fillImage: PROJECTS_IMAGES_PATH + "/first-bread/" + "full.webp",
      fullDescription:
        "The site represents a company that produces and sells bread. Custom designed theme for Wordpress. SEO optimized and fast.",
      devices: {
        desktop: PROJECTS_IMAGES_PATH + "/first-bread/" + "desktop.webp",
        tablet: PROJECTS_IMAGES_PATH + "/first-bread/" + "tablet.webp",
        mobile: PROJECTS_IMAGES_PATH + "/first-bread/" + "mobile.webp",
      },
    },
  },
  {
    slug: "hlebodar",
    name: "Hlebodar website",
    shortDescription:
      "Multi-language site of Hlebodar company. Custom designed theme for Wordpress. SEO optimized and fast. The site is fully responsive and works on all devices.",
    preview: PROJECTS_IMAGES_PATH + "/hlebodar/" + "preview.webp",
    year: 2019,
    private: false,
    priority: true,
    role: "Full-stack",
    developedFor: "HD-group",
    link: "https://hlibodar.com.ua/en",
    tags: ["Wordpress", "Bootstrap", "SCSS", "Webpack", "npm"],
    detailedInfo: {
      fillImage: PROJECTS_IMAGES_PATH + "/hlebodar/" + "full.webp",
      fullDescription:
        "Multi-language site of Hlebodar company. Custom designed theme for Wordpress. SEO optimized and fast. The site is fully responsive and works on all devices.",
      devices: {
        desktop: PROJECTS_IMAGES_PATH + "/hlebodar/" + "desktop.webp",
        tablet: PROJECTS_IMAGES_PATH + "/hlebodar/" + "tablet.webp",
        mobile: PROJECTS_IMAGES_PATH + "/hlebodar/" + "mobile.webp",
      },
    },
  },
  {
    slug: "bread-4u",
    name: "Bread4U landing pages",
    shortDescription:
      "Landing pages for Bread4U company. SEO optimized and fast. The page is fully responsive and works on all devices.",
    preview: PROJECTS_IMAGES_PATH + "/bread-4u/" + "preview.webp",
    year: 2019,
    private: false,
    priority: false,
    role: "Front-end",
    developedFor: "HD-group",
    link: "https://www.bread4u.com.ua",
    tags: ["Wordpress", "Bootstrap", "SCSS", "Webpack", "npm"],
    detailedInfo: {
      fillImage: PROJECTS_IMAGES_PATH + "/bread-4u/" + "full.webp",
      fullDescription:
        "Landing pages for Bread4U company. SEO optimized and fast. The page is fully responsive and works on all devices.",
      devices: {
        desktop: PROJECTS_IMAGES_PATH + "/bread-4u/" + "desktop.webp",
        tablet: PROJECTS_IMAGES_PATH + "/bread-4u/" + "tablet.webp",
        mobile: PROJECTS_IMAGES_PATH + "/bread-4u/" + "mobile.webp",
      },
    },
  },
  {
    slug: "deinsekt",
    name: "Online store Deinsekt",
    shortDescription:
      "The site represents an online store that sells insect protection products. Custom designed theme for Wordpress. SEO optimized and fast. The site is fully responsive and works on all devices.",
    preview: PROJECTS_IMAGES_PATH + "/deinsekt/" + "preview.webp",
    year: 2019,
    private: false,
    priority: true,
    role: "Full-stack",
    developedFor: "Deinsekt.de",
    link: "https://codevery.com",
    tags: ["Wordpress", "Elementor", "WooCommerce", "Bootstrap", "SCSS", "Webpack", "npm"],
    detailedInfo: {
      fillImage: PROJECTS_IMAGES_PATH + "/deinsekt/" + "full.webp",
      fullDescription:
        "The site represents an online store that sells insect protection products. Custom designed theme for Wordpress. SEO optimized and fast. The site is fully responsive and works on all devices.",
      devices: {
        desktop: PROJECTS_IMAGES_PATH + "/deinsekt/" + "desktop.webp",
        tablet: PROJECTS_IMAGES_PATH + "/deinsekt/" + "tablet.webp",
        mobile: PROJECTS_IMAGES_PATH + "/deinsekt/" + "mobile.webp",
      },
    },
  },
  {
    slug: "codevery",
    name: "Codevery site",
    shortDescription:
      "The site represents a company that provides web development services. Custom designed theme for Wordpress. SEO optimized and fast.",
    preview: PROJECTS_IMAGES_PATH + "/codevery/" + "preview.webp",
    year: 2019,
    private: false,
    priority: true,
    role: "Full-stack",
    developedFor: "Codevery LLC",
    link: "https://codevery.com/portfolio",
    tags: ["Wordpress", "Bootstrap", "SCSS", "Webpack", "npm"],
    detailedInfo: {
      fillImage: PROJECTS_IMAGES_PATH + "/codevery/" + "full.webp",
      fullDescription:
        "The site represents a company that provides web development services. Custom designed theme for Wordpress. SEO optimized and fast. The site is fully responsive and works on all devices.",
      devices: {
        desktop: PROJECTS_IMAGES_PATH + "/codevery/" + "desktop.webp",
        tablet: PROJECTS_IMAGES_PATH + "/codevery/" + "tablet.webp",
        mobile: PROJECTS_IMAGES_PATH + "/codevery/" + "mobile.webp",
      },
    },
  },
];
