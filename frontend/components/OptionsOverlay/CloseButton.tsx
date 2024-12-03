"use client";

import { useContext } from "react";
import { OptionsContext } from "@/context/OptionsContext";
import styles from "./CloseButton.module.scss";

export const CloseButton = () => {
  const { toggleOptionsOverlay } = useContext(OptionsContext);

  return (
    <button
      className={styles["close-button"]}
      onClick={() => toggleOptionsOverlay("hide")}
    >
      X
    </button>
  );
};
