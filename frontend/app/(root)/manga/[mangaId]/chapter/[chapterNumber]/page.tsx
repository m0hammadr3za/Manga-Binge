import { Navbar } from "@/app/_ui/Navbar";
import { ChapterView } from "@/app/_ui/ChapterView";
import styles from "./page.module.scss";

const ChapterPage = () => {
  return (
    <div className={styles["chapter-page"]}>
      <div className={styles["chapter-page__navbar-container"]}>
        <Navbar />
      </div>

      <div className={styles["chapter-page__content-container"]}>
        <ChapterView />
      </div>
    </div>
  );
};

export default ChapterPage;
