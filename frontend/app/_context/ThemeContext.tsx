"use client";

import React, { useContext, useEffect } from "react";
import { OptionsContext } from "./OptionsContext";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { isDarkTheme } = useContext(OptionsContext);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDarkTheme]);

  return <>{children}</>;
};
