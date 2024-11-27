import styles from "./OptionContainer.module.scss";

export const OptionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className={styles["option-container"]}>{children}</div>;
};
