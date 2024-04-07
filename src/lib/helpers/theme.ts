import { LS_THEME_KEY } from "src/constants/app-constants";

export type ThemeValue = "light" | "dark" | "system";
export type Theme = { label: string; value: ThemeValue };

export const ALLOWED_THEMES: Theme[] = [
  {
    label: "System",
    value: "system",
  },
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Dark",
    value: "dark",
  },
];

function getSavedTheme(): ThemeValue | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem(LS_THEME_KEY) as ThemeValue;
  } else {
    return null;
  }
}

function saveSelectedTheme(theme: ThemeValue) {
  if (typeof window !== "undefined") {
    return localStorage.setItem(LS_THEME_KEY, theme);
  }
}

export { getSavedTheme, saveSelectedTheme };
