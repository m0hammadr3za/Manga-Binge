import { useEffect, useState } from "react";

export type themeType = "light" | "dark";
export type toggleThemeType = (newTheme: themeType) => void;

export const useTheme = () => {
  const [theme, setTheme] = useState<themeType>(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (storedTheme) return storedTheme;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  const toggleTheme = (newTheme: themeType) => {
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};
