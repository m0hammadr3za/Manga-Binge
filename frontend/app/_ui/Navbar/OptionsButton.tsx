"use client";

import { OptionsContext } from "@/app/_context/OptionsContext";
import { useContext } from "react";
import styles from "./OptionsButton.module.scss";

export const OptionsButton = () => {
  const { toggleOptionsOverlay } = useContext(OptionsContext);

  return (
    <button
      className={styles["options-button"]}
      onClick={() => toggleOptionsOverlay("show")}
    >
      OPTIONS
    </button>
  );
};
