import { ReactNode } from "react";
import styles from "./index.module.scss";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__content}>
        <div>
          <Navbar />
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};
