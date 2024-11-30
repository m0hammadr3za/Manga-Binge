import { useEffect, useState } from "react";

export type goToBottomButtonType = "show" | "hide";
export type toggleGoToBottomButtonType = (
  newState: goToBottomButtonType
) => void;

export const useGoToBottomButton = (initialState: goToBottomButtonType) => {
  const [goToBottomButton, setGoToBottomButton] =
    useState<goToBottomButtonType>(() => {
      const storedGoToBottomButton = localStorage.getItem(
        "goToBottomButton"
      ) as goToBottomButtonType;

      if (storedGoToBottomButton) return storedGoToBottomButton;
      return initialState;
    });

  useEffect(() => {
    localStorage.setItem("goToBottomButton", goToBottomButton);
  }, [goToBottomButton]);

  const toggleGoToBottomButton = (newState: "show" | "hide") => {
    setGoToBottomButton(newState);
  };

  return { goToBottomButton, toggleGoToBottomButton };
};
