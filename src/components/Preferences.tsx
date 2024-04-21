import { AdjustmentsHorizontalIcon, Cog6ToothIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { CookieIcon } from "src/components/icons";
import { ALLOWED_THEMES } from "src/lib/helpers/theme";
import useAppContext from "src/lib/hooks/useAppContext";

const iconClasses = "h-5 w-5";

const ICONS: Record<string, React.ReactNode> = {
  light: <SunIcon className={iconClasses} />,
  dark: <MoonIcon className={iconClasses} />,
  system: <Cog6ToothIcon className={iconClasses} />,
  cookies: <CookieIcon className={classNames(iconClasses, "dark:fill-white")} />,
};

type SettingItem = {
  label: string;
  value: string;
  active?: boolean;
  action: () => void;
};

type SettingGroup = {
  name: string;
  items: SettingItem[];
};

type Settings = SettingGroup[];

function Preferences({ className }: { className?: string }) {
  const { currentTheme, systemTheme, selectTheme, setShowCookieConsent, showCookieConsent } = useAppContext();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      const closeDropdown = () => setOpened(false);
      window.addEventListener("click", closeDropdown);
      return () => window.removeEventListener("click", closeDropdown);
    }
  }, [opened]);

  const settings: Settings = [
    {
      name: "Theme",
      items: ALLOWED_THEMES.map((theme) => ({
        label: `${theme.label} theme`,
        value: theme.value,
        active: currentTheme === theme.value,
        action: () => {
          selectTheme(theme.value);
          setOpened(false);
        },
      })),
    },
    {
      name: "Preferences",
      items: [
        {
          label: "Cookie consent",
          value: "cookies",
          action: () => {
            setShowCookieConsent(!showCookieConsent);
          },
        },
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center space-x-2">
      <div className={classNames(currentTheme === "system" ? "text-gray-500" : "primary-text-color")}>
        {currentTheme === "light" && ICONS.light}
        {currentTheme === "dark" && ICONS.dark}
        {currentTheme === "system" && (
          <>
            {systemTheme === "light" && ICONS.light}
            {systemTheme === "dark" && ICONS.dark}
            {systemTheme === null && ICONS.system}
          </>
        )}
      </div>
      <div className={classNames("relative", className)} onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="Select theme"
          onClick={() => setOpened((prev) => !prev)}
          className={classNames(
            "rounded-md bg-gray-100 p-2 text-lg dark:bg-slate-700",
            opened && "text-sky-500"
          )}>
          <AdjustmentsHorizontalIcon className={iconClasses} />
        </button>
        <div
          className={classNames(
            "z-100 absolute bottom-0 right-0 z-50 min-w-36 translate-y-full overflow-hidden",
            opened ? "h-auto py-2" : "h-0 py-0"
          )}>
          <div className="rounded-md border bg-gray-100 py-2 shadow-md dark:border-none dark:bg-slate-700 dark:shadow-none">
            {settings.map((group, groupIndex) => (
              <div key={group.name} className="">
                <p className="muted-text-color mb-1 px-2 text-right text-xs">{group.name}</p>
                <ul className="overflow-hidden ">
                  {group.items.map((item) => (
                    <li key={item.value}>
                      <button
                        aria-label={item.label}
                        className={classNames(
                          "w-full whitespace-nowrap rounded-sm px-2 py-1 hover:bg-gray-300 dark:hover:bg-slate-800",
                          item.active && "primary-text-color"
                        )}
                        onClick={() => {
                          item.action();
                          setOpened(false);
                        }}>
                        <p className="flex items-center">
                          <span className="mr-2">{ICONS[item.value]}</span>
                          <span>{item.label}</span>
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
                {groupIndex < settings.length - 1 && (
                  <div className="mx-2 my-2 h-[1px] bg-gray-300 dark:bg-slate-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preferences;
