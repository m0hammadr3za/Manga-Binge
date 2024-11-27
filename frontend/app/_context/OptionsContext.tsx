"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

interface OptionsContextProps {
  optionsOverlay: "show" | "hide";
  theme: "light" | "dark";
  goToTopButton: "show" | "hide";
  goToBottomButton: "show" | "hide";
  toggleOptionsOverlay: (newState: "show" | "hide") => void;
  toggleTheme: (newTheme: "light" | "dark") => void;
  toggleGoToTopButton: (newState: "show" | "hide") => void;
  toggleGoToBottomButton: (newState: "show" | "hide") => void;
}

export const OptionsContext = createContext<OptionsContextProps>(
  {} as OptionsContextProps
);

export const OptionsProvider = ({ children }: { children: ReactNode }) => {
  const [optionsOverlay, setOptionsOverlay] = useState<"show" | "hide">("hide");

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (storedTheme) return storedTheme;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  const [goToTopButton, setGoToTopButton] = useState<"show" | "hide">("show");
  const [goToBottomButton, setGoToBottomButton] = useState<"show" | "hide">(
    "show"
  );

  // Load preferences on initial mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) setTheme("dark");
    }

    const storedGoToTopButton = localStorage.getItem("goToTopButton") as
      | "show"
      | "hide";
    if (storedGoToTopButton) setGoToTopButton(storedGoToTopButton);

    const storedGoToBottomButton = localStorage.getItem("goToBottomButton") as
      | "show"
      | "hide";
    if (storedGoToBottomButton) setGoToBottomButton(storedGoToBottomButton);
  }, []);

  // Update localStorage and apply changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("goToTopButton", goToTopButton);
  }, [goToTopButton]);

  useEffect(() => {
    localStorage.setItem("goToBottomButton", goToBottomButton);
  }, [goToBottomButton]);

  const toggleOptionsOverlay = (newState: "show" | "hide") => {
    setOptionsOverlay(newState);
  };

  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
  };

  const toggleGoToTopButton = (newState: "show" | "hide") => {
    setGoToTopButton(newState);
  };

  const toggleGoToBottomButton = (newState: "show" | "hide") => {
    setGoToBottomButton(newState);
  };

  return (
    <OptionsContext.Provider
      value={{
        optionsOverlay,
        theme,
        goToTopButton,
        goToBottomButton,
        toggleOptionsOverlay,
        toggleTheme,
        toggleGoToTopButton,
        toggleGoToBottomButton,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};
