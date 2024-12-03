import { useEffect, useState } from "react";

export type goToTopButtonType = "show" | "hide";
export type toggleGoToTopButtonType = (newState: goToTopButtonType) => void;

export const useGoToTopButton = (initialState: goToTopButtonType) => {
  const [goToTopButton, setGoToTopButton] = useState<goToTopButtonType>(() => {
    const storedGoToTopButton = localStorage.getItem(
      "goToTopButton"
    ) as goToTopButtonType;

    if (storedGoToTopButton) return storedGoToTopButton;
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem("goToTopButton", goToTopButton);
  }, [goToTopButton]);

  const toggleGoToTopButton = (newState: "show" | "hide") => {
    setGoToTopButton(newState);
  };

  return { goToTopButton, toggleGoToTopButton };
};
