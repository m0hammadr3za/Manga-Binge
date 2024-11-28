import Link from "next/link";
import styles from "./NavButton.module.scss";

interface NavButtonProps {
  children: React.ReactNode;
  href: string;
}

export const NavButton = (props: NavButtonProps) => {
  const { children, href } = props;

  return (
    <Link className={styles["nav-button"]} href={href}>
      {children}
    </Link>
  );
};
