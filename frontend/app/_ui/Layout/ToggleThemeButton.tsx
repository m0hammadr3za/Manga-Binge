"use client";

import { ThemeContext } from "@/app/_context/ThemeContext";
import { useContext } from "react";

export const ToggleThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle theme</button>;
};
