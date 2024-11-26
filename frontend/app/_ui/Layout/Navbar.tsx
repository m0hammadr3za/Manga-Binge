import { Logo } from "./Logo";
import { ToggleOptionsOverlay } from "./ToggleOptionsOverlay";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Logo />
      </div>

      <div>
        <ToggleOptionsOverlay />
      </div>
    </div>
  );
};
