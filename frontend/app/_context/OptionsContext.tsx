"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

interface OptionsContextProps {
  showOptionsOverlay: boolean;
  isDarkTheme: boolean;
  showGoToTopButton: boolean;
  showGoToBottomButton: boolean;
  toggleOptionsOverlay: () => void;
  toggleIsDark: () => void;
  toggleGoToTopButton: () => void;
  toggleGoToBottomButton: () => void;
}

export const OptionsContext = createContext<OptionsContextProps>(
  {} as OptionsContextProps
);

export const OptionsProvider = ({ children }: { children: ReactNode }) => {
  const [showOptionsOverlay, setShowOptionsOverlay] = useState(false);

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("isDarkTheme");
    if (storedTheme) {
      try {
        return JSON.parse(storedTheme);
      } catch {
        return true; // or default to system preference
      }
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [showGoToTopButton, setShowGoToTopButton] = useState(true);
  const [showGoToBottomButton, setShowGoToBottomButton] = useState(true);

  // Load preferences on initial mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("isDarkTheme");
    if (storedTheme) {
      setIsDarkTheme(JSON.parse(storedTheme));
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkTheme(prefersDark);
    }

    const storedGoToTopButton = localStorage.getItem("showGoToTopButton");
    if (storedGoToTopButton !== null) {
      setShowGoToTopButton(JSON.parse(storedGoToTopButton));
    }

    const storedGoToBottomButton = localStorage.getItem("showGoToBottomButton");
    if (storedGoToBottomButton !== null) {
      setShowGoToBottomButton(JSON.parse(storedGoToBottomButton));
    }
  }, []);

  // Update localStorage and apply changes
  useEffect(() => {
    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  useEffect(() => {
    localStorage.setItem(
      "showGoToTopButton",
      JSON.stringify(showGoToTopButton)
    );
  }, [showGoToTopButton]);

  useEffect(() => {
    localStorage.setItem(
      "showGoToBottomButton",
      JSON.stringify(showGoToBottomButton)
    );
  }, [showGoToBottomButton]);

  const toggleOptionsOverlay = () => {
    setShowOptionsOverlay((prev) => !prev);
  };

  const toggleIsDark = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const toggleGoToTopButton = () => {
    setShowGoToTopButton((prev) => !prev);
  };

  const toggleGoToBottomButton = () => {
    setShowGoToBottomButton((prev) => !prev);
  };

  return (
    <OptionsContext.Provider
      value={{
        showOptionsOverlay,
        isDarkTheme,
        showGoToTopButton,
        showGoToBottomButton,
        toggleOptionsOverlay,
        toggleIsDark,
        toggleGoToTopButton,
        toggleGoToBottomButton,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};
