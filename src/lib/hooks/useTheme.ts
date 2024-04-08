import { useEffect, useState } from "react";
import { ALLOWED_THEMES, getSavedTheme, saveSelectedTheme } from "src/lib/helpers/theme";
import type { ThemeValue } from "src/lib/helpers/theme";

function useTheme() {
  const [theme, setTheme] = useState<ThemeValue>(getSavedTheme() || "system");
  const [systemTheme, setSystemTheme] = useState<"dark" | "light" | null>(null);

  const selectTheme = (theme: ThemeValue) => {
    setTheme(theme);
    saveSelectedTheme(theme);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const body = document.body;
      ALLOWED_THEMES.forEach((theme) => body.classList.remove(theme.value));
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      if (theme === "system") {
        body.classList.add(systemTheme);
      } else {
        body.classList.add(theme);
      }
      setSystemTheme(systemTheme);
    }
  }, [theme]);

  return {
    currentTheme: theme,
    systemTheme,
    selectTheme,
  };
}

export default useTheme;
