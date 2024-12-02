import { Layout } from "@/app/_ui/Layout";
import { Navbar } from "@/app/_ui/Navbar";
import { ChapterView } from "@/app/_ui/ChapterView";
import styles from "./page.module.scss";

const SingleChapter = () => {
  return (
    <Layout>
      <div className={styles["single-chapter__content-container"]}>
        <div>
          <Navbar />
        </div>

        <div>
          <ChapterView />
        </div>
      </div>
    </Layout>
  );
};

export default SingleChapter;
