"use client";

import { useContext } from "react";
import styles from "./index.module.scss";
import { OptionsContext } from "@/app/_context/OptionsContext";

export const Options = () => {
  const {
    isDarkTheme,
    showGoToBottomButton,
    showGoToTopButton,
    toggleOptionsOverlay,
    toggleIsDark,
    toggleGoToTopButton,
    toggleGoToBottomButton,
  } = useContext(OptionsContext);

  const toggleLightTheme = () => {
    if (!isDarkTheme) return;
    toggleIsDark();
  };

  const toggleDarkTheme = () => {
    if (isDarkTheme) return;
    toggleIsDark();
  };

  const toggleShowGoToTopButton = () => {
    if (showGoToTopButton) return;
    toggleGoToTopButton();
  };

  const toggleHideGoToTopButton = () => {
    if (!showGoToTopButton) return;
    toggleGoToTopButton();
  };

  const toggleShowGoToBottomButton = () => {
    if (showGoToBottomButton) return;
    toggleGoToBottomButton();
  };

  const toggleHideGoToBottomButton = () => {
    if (!showGoToBottomButton) return;
    toggleGoToBottomButton();
  };

  return (
    <div className={styles["options"]}>
      <div className={styles["options__content"]}>
        <div className={styles["options__option"]}>
          <p className={styles["options__option-title"]}>Theme</p>

          <div className={styles["options__option-actions"]}>
            <button
              className={`${styles["options__action-button"]} ${
                !isDarkTheme && styles["options__action-button--active"]
              }`}
              onClick={toggleLightTheme}
            >
              Light
            </button>

            <p className={styles["options__divider"]}> / </p>

            <button
              className={`${styles["options__action-button"]} ${
                isDarkTheme && styles["options__action-button--active"]
              }`}
              onClick={toggleDarkTheme}
            >
              Dark
            </button>
          </div>
        </div>

        <div className={styles["options__option"]}>
          <p className={styles["options__option-title"]}>
            {`"Go to the top" button`}
          </p>

          <div className={styles["options__option-actions"]}>
            <button
              className={`${styles["options__action-button"]} ${
                showGoToTopButton && styles["options__action-button--active"]
              }`}
              onClick={toggleShowGoToTopButton}
            >
              Show
            </button>

            <p className={styles["options__divider"]}> / </p>

            <button
              className={`${styles["options__action-button"]} ${
                !showGoToTopButton && styles["options__action-button--active"]
              }`}
              onClick={toggleHideGoToTopButton}
            >
              Hide
            </button>
          </div>
        </div>

        <div className={styles["options__option"]}>
          <p className={styles["options__option-title"]}>
            {`"Go to the bottom" button`}
          </p>

          <div className={styles["options__option-actions"]}>
            <button
              className={`${styles["options__action-button"]} ${
                showGoToBottomButton && styles["options__action-button--active"]
              }`}
              onClick={toggleShowGoToBottomButton}
            >
              Show
            </button>

            <p className={styles["options__divider"]}> / </p>

            <button
              className={`${styles["options__action-button"]} ${
                !showGoToBottomButton &&
                styles["options__action-button--active"]
              }`}
              onClick={toggleHideGoToBottomButton}
            >
              Hide
            </button>
          </div>
        </div>
      </div>

      <div className={styles["options__close-button-container"]}>
        <button
          className={styles["options__close-button"]}
          onClick={toggleOptionsOverlay}
        >
          X
        </button>
      </div>
    </div>
  );
};
