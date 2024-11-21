import Link from "next/link";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className={styles.logo}>Mangabinge</h1>
    </Link>
  );
};
