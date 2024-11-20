import Link from "next/link";
import styles from "./styles.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/">
          <h1 className={styles.navbar__title}>Mangabinge</h1>
        </Link>
      </div>

      <div>
        <button className={styles["navbar__theme-toggle-button"]}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};
