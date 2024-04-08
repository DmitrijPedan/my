import { CogIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { ALLOWED_THEMES } from "src/lib/helpers/theme";
import useAppContext from "src/lib/hooks/useAppContext";

const iconClasses = "h-6 w-6";

const ICONS: Record<string, React.ReactNode> = {
  light: <SunIcon className={iconClasses} />,
  dark: <MoonIcon className={iconClasses} />,
  system: <CogIcon className={iconClasses} />,
};

function ThemeSelector({ className }: { className?: string }) {
  const { currentTheme, systemTheme, selectTheme } = useAppContext();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      const closeDropdown = () => setOpened(false);
      window.addEventListener("click", closeDropdown);
      return () => window.removeEventListener("click", closeDropdown);
    }
  }, [opened]);

  return (
    <div className={classNames("relative", className)} onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setOpened((prev) => !prev)}
        className={classNames(
          "text-lg",
          currentTheme === "system" ? "text-brand-color-2" : "text-brand-color-1"
        )}>
        {currentTheme === "light" && ICONS.light}
        {currentTheme === "dark" && ICONS.dark}
        {currentTheme === "system" && (
          <>
            {systemTheme === "light" && ICONS.light}
            {systemTheme === "dark" && ICONS.dark}
            {systemTheme === null && ICONS.system}
          </>
        )}
      </button>
      <div
        className={classNames(
          "absolute bottom-0 right-0 z-10 min-w-36 translate-y-full overflow-hidden",
          opened ? "h-auto py-2" : "h-0 py-0"
        )}>
        <ul className="overflow-hidden rounded-md border bg-brand-bg-muted shadow-md dark:border-none dark:shadow-none">
          {ALLOWED_THEMES.map((theme) => (
            <li key={theme.value}>
              <button
                className={classNames(
                  "w-full rounded-sm px-2 py-1 hover:bg-gray-300 dark:hover:bg-gray-800",
                  currentTheme === theme.value && "text-brand-color-1"
                )}
                onClick={() => {
                  selectTheme(theme.value);
                  setOpened(false);
                }}>
                <p className="flex">
                  <span className="mr-2">{ICONS[theme.value]}</span>
                  <span>{theme.label}</span>
                </p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ThemeSelector;
