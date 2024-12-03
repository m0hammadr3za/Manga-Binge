"use client";

import { useContext } from "react";
import { OptionsContext } from "@/context/OptionsContext";
import { CloseButton } from "./CloseButton";
import { ThemeOption } from "./Options/Theme";
import { ScrollbarOption } from "./Options/Scrollbar";
import { GoToTopOption } from "./Options/GoToTop";
import { GoToBottomOption } from "./Options/GoToBottom";
import styles from "./OptionsOverlay.module.scss";

export const OptionsOverlay = () => {
  const { optionsOverlay } = useContext(OptionsContext);

  if (optionsOverlay === "hide") return null;

  return (
    <div className={styles["options-overlay"]}>
      <div className={styles["options-overlay__background"]} />

      <div className={styles["options-overlay__content"]}>
        <ThemeOption />

        <ScrollbarOption />

        <GoToTopOption />

        <GoToBottomOption />
      </div>

      <div className={styles["options-overlay__close-button"]}>
        <CloseButton />
      </div>
    </div>
  );
};
