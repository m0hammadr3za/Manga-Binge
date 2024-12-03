import styles from "./Title.module.scss";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return <p className={styles["title"]}>{children}</p>;
};
