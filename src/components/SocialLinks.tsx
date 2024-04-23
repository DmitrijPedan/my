import classNames from "classnames";
import React from "react";
import {
  CVIcon,
  GithubIcon,
  GmailIcon,
  LinkedInIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "src/components/icons";

const LINKS = [
  {
    href: "https://www.linkedin.com/in/dmitriypedan/",
    title: "LinkedIn",
    label: "Open LinkedIn profile in a new tab",
    newTab: true,
    icon: (
      <LinkedInIcon className="h-8 w-8 fill-slate-700 hover:fill-sky-700 sm:h-6 sm:w-6 dark:fill-slate-500" />
    ),
  },
  {
    href: "https://github.com/DmitrijPedan",
    title: "GitHub",
    label: "Open GitHub profile in a new tab",
    newTab: true,
    icon: (
      <GithubIcon className="h-9 w-9 fill-slate-700 hover:fill-black sm:h-7 sm:w-7 dark:fill-slate-500 dark:hover:fill-white" />
    ),
  },
  {
    href: "mailto:dmitrijpedan84@gmail.com",
    title: "Gmail",
    label: "Send an email to dmitrijpedan84@gmail.com",
    newTab: false,
    icon: (
      <GmailIcon className="h-8 w-8 fill-slate-700 hover:fill-red-500 sm:h-6 sm:w-6 dark:fill-slate-500" />
    ),
  },
  {
    href: "https://wa.me/380962036188",
    title: "WhatsApp",
    label: "Send message with WhatsApp",
    newTab: true,
    icon: (
      <WhatsAppIcon className="h-8 w-8 fill-slate-700 hover:fill-green-500 sm:h-6 sm:w-6 dark:fill-slate-500" />
    ),
  },
  {
    href: "https://t.me/DmitriyPedan",
    title: "Telegram",
    label: "Send message with Telegram",
    newTab: true,
    icon: (
      <TelegramIcon className="h-9 w-9 fill-slate-700 hover:fill-sky-500 sm:h-7 sm:w-7 dark:fill-slate-500" />
    ),
  },
  {
    href: "https://drive.google.com/file/d/1-G23K3T48Zw34apBVtmmFPU4KpLrKBrf/view?usp=drive_link",
    title: "CV",
    label: "Open my CV in a new tab",
    newTab: true,
    icon: <CVIcon className="h-8 w-8 fill-slate-700 hover:fill-white sm:h-7 sm:w-7 dark:fill-slate-500" />,
  },
];

function SocialLinks({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames("flex items-center space-x-4", className)} {...rest}>
      {LINKS.map((link) => (
        <a
          key={link.href}
          aria-label={link.label}
          href={link.href}
          target={link.newTab ? "_blank" : "_self"}
          title={link.label}
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
