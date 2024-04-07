import { useEffect, useState } from "react";
import { ALLOWED_THEMES, getSavedTheme, saveSelectedTheme } from "src/lib/helpers/theme";
import type { ThemeValue } from "src/lib/helpers/theme";

function useTheme() {
  const [theme, setTheme] = useState<ThemeValue>(getSavedTheme() || "system");

  const selectTheme = (theme: ThemeValue) => {
    setTheme(theme);
    saveSelectedTheme(theme);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      ALLOWED_THEMES.forEach((theme) => document.body.classList.remove(theme.value));
      document.body.classList.add(theme);
    }
  }, [theme]);

  return {
    currentTheme: theme,
    selectTheme,
  };
}

export default useTheme;
