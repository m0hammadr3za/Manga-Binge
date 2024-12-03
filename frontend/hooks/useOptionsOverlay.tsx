import { useState } from "react";

export type optionsOverlayType = "show" | "hide";
export type toggleOptionsOverlayType = (newState: optionsOverlayType) => void;

export const useOptionsOverlay = (initialState: optionsOverlayType) => {
  const [optionsOverlay, setOptionsOverlay] =
    useState<optionsOverlayType>(initialState);

  const toggleOptionsOverlay = (newState: optionsOverlayType) => {
    setOptionsOverlay(newState);
  };

  return { optionsOverlay, toggleOptionsOverlay };
};
