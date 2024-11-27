"use client";

import React, { useContext, useEffect } from "react";
import { OptionsContext } from "./OptionsContext";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(OptionsContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <>{children}</>;
};
