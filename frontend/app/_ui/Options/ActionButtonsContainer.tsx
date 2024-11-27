import styles from "./ActionButtonsContainer.module.scss";

export const ActionButtonsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className={styles["action-buttons-container"]}>{children}</div>;
};
