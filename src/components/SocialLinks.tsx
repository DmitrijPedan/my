import classNames from "classnames";
import React from "react";
import GithubIcon from "src/components/icons/GithubIcon";
import GmailIcon from "src/components/icons/GmailIcon";
import LinkedInIcon from "src/components/icons/LinkedInIcon";
import TelegramIcon from "src/components/icons/TelegramIcon";
import WhatsAppIcon from "src/components/icons/WhatsAppIcon";

const LINKS = [
  {
    href: "https://www.linkedin.com/in/dmitriypedan/",
    title: "LinkedIn",
    newTab: true,
    icon: <LinkedInIcon className="h-8 w-8 fill-slate-500 hover:fill-sky-700 sm:h-6 sm:w-6" />,
  },
  {
    href: "https://github.com/DmitrijPedan",
    title: "GitHub",
    newTab: true,
    icon: (
      <GithubIcon className="h-9 w-9 fill-slate-500 hover:fill-black sm:h-7 sm:w-7 dark:hover:fill-white" />
    ),
  },
  {
    href: "mailto:dmitrijpedan84@gmail.com",
    title: "Gmail",
    newTab: false,
    icon: <GmailIcon className="h-8 w-8 fill-slate-500 hover:fill-red-500 sm:h-6 sm:w-6" />,
  },
  {
    href: "https://wa.me/380962036188",
    title: "WhatsApp",
    newTab: true,
    icon: <WhatsAppIcon className="h-8 w-8 fill-slate-500 hover:fill-green-500 sm:h-6 sm:w-6" />,
  },
  {
    href: "https://t.me/DmitriyPedan",
    title: "Telegram",
    newTab: true,
    icon: <TelegramIcon className="h-9 w-9 fill-slate-500 hover:fill-sky-500 sm:h-7 sm:w-7" />,
  },
];

function SocialLinks({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames("flex items-center space-x-4", className)} {...rest}>
      {LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.newTab ? "_blank" : "_self"}
          title={link.title}
          rel="noreferrer"
          className="transition-transform duration-100 hover:scale-105">
          <span className="sr-only">{link.title}</span>
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
