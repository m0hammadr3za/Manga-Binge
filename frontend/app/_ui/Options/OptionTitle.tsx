import styles from "./OptionTitle.module.scss";

export const OptionTitle = ({ children }: { children: React.ReactNode }) => {
  return <p className={styles["option-title"]}>{children}</p>;
};
