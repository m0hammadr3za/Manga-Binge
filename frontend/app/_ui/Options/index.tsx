"use client";

import { useContext } from "react";
import { OptionsContext } from "@/app/_context/OptionsContext";
import { CloseButton } from "./CloseButton";
import { ThemeOption } from "./ThemeOption";
import { GoToTopButtonOption } from "./GoToTopButtonOption";
import { GoToBottomButtonOption } from "./GoToBottomButtonOption";
import styles from "./index.module.scss";
import { Scrollbar } from "./Scrollbar";

export const Options = () => {
  const { toggleOptionsOverlay } = useContext(OptionsContext);

  return (
    <div className={styles["options"]}>
      <div className={styles["options__background"]} />

      <div className={styles["options__content"]}>
        <ThemeOption />

        <Scrollbar />

        <GoToTopButtonOption />

        <GoToBottomButtonOption />
      </div>

      <div className={styles["options__close-button"]}>
        <CloseButton onClick={() => toggleOptionsOverlay("hide")}>
          X
        </CloseButton>
      </div>
    </div>
  );
};
