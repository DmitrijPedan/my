import { Cog6ToothIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { ALLOWED_THEMES } from "src/lib/helpers/theme";
import useAppContext from "src/lib/hooks/useAppContext";

const iconClasses = "h-5 w-5";

const ICONS: Record<string, React.ReactNode> = {
  light: <SunIcon className={iconClasses} />,
  dark: <MoonIcon className={iconClasses} />,
  system: <Cog6ToothIcon className={iconClasses} />,
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
        className={classNames("text-lg", currentTheme === "system" ? "text-gray-500" : "text-emerald-500")}>
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
          "z-100 absolute bottom-0 right-0 z-50 min-w-36 translate-y-full overflow-hidden",
          opened ? "h-auto py-2" : "h-0 py-0"
        )}>
        <ul className="overflow-hidden rounded-md border bg-gray-100 shadow-md dark:border-none dark:bg-slate-700 dark:shadow-none">
          {ALLOWED_THEMES.map((theme) => (
            <li key={theme.value}>
              <button
                className={classNames(
                  "w-full rounded-sm px-2 py-1 hover:bg-gray-300 dark:hover:bg-slate-800",
                  currentTheme === theme.value && "text-emerald-500"
                )}
                onClick={() => {
                  selectTheme(theme.value);
                  setOpened(false);
                }}>
                <p className="flex items-center">
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
