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
    title: "LinkedIn profile",
    newTab: true,
    icon: <LinkedInIcon className="h-7 w-7 fill-slate-500 hover:fill-sky-700" />,
  },
  {
    href: "https://github.com/DmitrijPedan",
    title: "GitHub profile",
    newTab: true,
    icon: <GithubIcon className="h-8 w-8 fill-slate-500 hover:fill-emerald-500" />,
  },
  {
    href: "mailto:dmitrijpedan84@gmail.com",
    title: "Gmail",
    newTab: false,
    icon: <GmailIcon className="h-8 w-8 fill-slate-500 hover:fill-red-500" />,
  },
  {
    href: "https://wa.me/380962036188",
    title: "WhatsApp messenger",
    newTab: true,
    icon: <WhatsAppIcon className="h-7 w-7 fill-slate-500 hover:fill-green-500" />,
  },
  {
    href: "https://t.me/DmitriyPedan",
    title: "Telegram messenger",
    newTab: true,
    icon: <TelegramIcon className="h-8 w-8 fill-slate-500 hover:fill-sky-500" />,
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
          className="transition-transform duration-100 hover:scale-110">
          <span className="sr-only">{link.title}</span>
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
