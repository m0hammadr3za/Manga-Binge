import { useEffect, useState } from "react";

export type optionsOverlayType = "show" | "hide";
export type toggleOptionsOverlayType = (newState: optionsOverlayType) => void;

export const useOptionsOverlay = (initialState: optionsOverlayType) => {
  const [optionsOverlay, setOptionsOverlay] = useState<optionsOverlayType>(
    () => {
      const storedOptionsOverlay = localStorage.getItem(
        "optionsOverlay"
      ) as optionsOverlayType;

      if (storedOptionsOverlay) return storedOptionsOverlay;
      return initialState;
    }
  );

  useEffect(() => {
    localStorage.setItem("optionsOverlay", optionsOverlay);
  }, [optionsOverlay]);

  const toggleOptionsOverlay = (newState: optionsOverlayType) => {
    setOptionsOverlay(newState);
  };

  return { optionsOverlay, toggleOptionsOverlay };
};
