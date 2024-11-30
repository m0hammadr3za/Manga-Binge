"use client";

import { createContext, ReactNode } from "react";
import {
  optionsOverlayType,
  toggleOptionsOverlayType,
  useOptionsOverlay,
} from "./useOptionsOverlay";
import { themeType, toggleThemeType, useTheme } from "./useTheme";
import {
  goToTopButtonType,
  toggleGoToTopButtonType,
  useGoToTopButton,
} from "./useGoToTopButton";
import {
  goToBottomButtonType,
  toggleGoToBottomButtonType,
  useGoToBottomButton,
} from "./useGoToBottomButton";
import { ScrollbarType, toggleScrollbar, useScrollbar } from "./useScrollbar";

interface OptionsContextProps {
  optionsOverlay: optionsOverlayType;
  toggleOptionsOverlay: toggleOptionsOverlayType;
  theme: themeType;
  toggleTheme: toggleThemeType;
  scrollbar: ScrollbarType;
  toggleScrollbar: toggleScrollbar;
  goToTopButton: goToTopButtonType;
  toggleGoToTopButton: toggleGoToTopButtonType;
  goToBottomButton: goToBottomButtonType;
  toggleGoToBottomButton: toggleGoToBottomButtonType;
}

export const OptionsContext = createContext<OptionsContextProps>(
  {} as OptionsContextProps
);

export const OptionsProvider = ({ children }: { children: ReactNode }) => {
  const { optionsOverlay, toggleOptionsOverlay } = useOptionsOverlay("hide");
  const { theme, toggleTheme } = useTheme();
  const { scrollbar, toggleScrollbar } = useScrollbar("standard");
  const { goToTopButton, toggleGoToTopButton } = useGoToTopButton("show");
  const { goToBottomButton, toggleGoToBottomButton } =
    useGoToBottomButton("show");

  return (
    <OptionsContext.Provider
      value={{
        optionsOverlay,
        toggleOptionsOverlay,
        theme,
        toggleTheme,
        scrollbar,
        toggleScrollbar,
        goToTopButton,
        toggleGoToTopButton,
        goToBottomButton,
        toggleGoToBottomButton,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};
