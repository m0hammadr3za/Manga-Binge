import styles from "./CloseButton.module.scss";

interface CloseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const CloseButton = (props: CloseButtonProps) => {
  const { children, onClick } = props;

  return (
    <button className={styles["close-button"]} onClick={onClick}>
      {children}
    </button>
  );
};
