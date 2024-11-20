import Link from "next/link";
import styles from "./styles.module.scss";
import ToggleThemeButton from "../ToggleThemeButton";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/">
          <h1 className={styles.navbar__title}>Mangabinge</h1>
        </Link>
      </div>

      <div>
        <ToggleThemeButton />
      </div>
    </div>
  );
};
