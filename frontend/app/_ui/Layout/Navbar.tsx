import { Logo } from "./Logo";
import { ToggleThemeButton } from "./ToggleThemeButton";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Logo />
      </div>

      <div>
        <ToggleThemeButton />
      </div>
    </div>
  );
};
