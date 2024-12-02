import { Navbar } from "@/app/_ui/Navbar";
import { PageView } from "@/app/_ui/PageView.tsx";
import styles from "./page.module.scss";

const SinglePage = () => {
  return (
    <div className={styles["single-page"]}>
      <div className={styles["single-page__navbar-container"]}>
        <Navbar />
      </div>

      <div className={styles["single-page__content-container"]}>
        <PageView />
      </div>
    </div>
  );
};

export default SinglePage;
