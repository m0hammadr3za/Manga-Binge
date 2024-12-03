import { ReactNode } from "react";
import styles from "./LightText.module.scss";

export const LightText = ({ children }: { children: ReactNode }) => {
  return <p className={styles["light-text"]}>{children}</p>;
};
