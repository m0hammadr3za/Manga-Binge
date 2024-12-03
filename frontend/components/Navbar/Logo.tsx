import Link from "next/link";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className={styles["logo"]}>
        <span className={styles["logo__first-letter"]}>M</span>angabinge
      </h1>
    </Link>
  );
};
