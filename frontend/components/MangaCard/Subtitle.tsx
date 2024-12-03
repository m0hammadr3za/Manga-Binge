import { ReactNode } from "react";
import styles from "./Subtitle.module.scss";

export const Subtitle = ({ children }: { children: ReactNode }) => {
  return <p className={styles.subtitle}>{children}</p>;
};
