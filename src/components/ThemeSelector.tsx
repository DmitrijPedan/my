import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { ALLOWED_THEMES } from "src/lib/helpers/theme";
import type { ThemeValue } from "src/lib/helpers/theme";
import useAppContext from "src/lib/hooks/useAppContext";

function ThemeSelector({ className }: { className?: string }) {
  const { currentTheme, selectTheme } = useAppContext();
  return (
    <div className={classNames("", className)}>
      <select
        className="bg-brand-bg-main"
        name="app-theme"
        id="appTheme"
        defaultValue={currentTheme}
        onChange={(e) => {
          selectTheme(e.target.value as ThemeValue);
        }}>
        {ALLOWED_THEMES.map((theme) => (
          <option key={theme.value} value={theme.value}>
            {theme.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ThemeSelector;
