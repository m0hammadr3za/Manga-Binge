import { Logo } from "./Logo";
import { OptionsButton } from "./OptionsButton";
import styles from "./index.module.scss";

export const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div>
        <Logo />
      </div>

      <div>
        <OptionsButton />
      </div>
    </div>
  );
};
