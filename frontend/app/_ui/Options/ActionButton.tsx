import styles from "./ActionButton.module.scss";

interface ActionButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export const ActionButton = (props: ActionButtonProps) => {
  const { children, active, onClick } = props;

  return (
    <button
      className={`${styles["action-button"]} ${
        active && styles["action-button--active"]
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
