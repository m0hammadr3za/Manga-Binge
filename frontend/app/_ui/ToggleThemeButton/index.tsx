"use client";

import { ThemeContext } from "@/app/_context/ThemeContext";
import { useContext } from "react";
import styles from "./styles.module.scss";

const ToggleThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button className={styles["toggle-theme-botton"]} onClick={toggleTheme}>
      Toggle theme
    </button>
  );
};

export default ToggleThemeButton;
