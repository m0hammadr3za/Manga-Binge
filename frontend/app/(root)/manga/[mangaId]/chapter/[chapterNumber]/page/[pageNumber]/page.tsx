import { Layout } from "@/app/_ui/Layout";
import { Navbar } from "@/app/_ui/Navbar";
import styles from "./page.module.scss";
import { PageView } from "@/app/_ui/PageView.tsx";

const SinglePage = () => {
  return (
    <Layout>
      <div className={styles["single-Page__content-container"]}>
        <div>
          <Navbar />
        </div>

        <div>
          <PageView />
        </div>
      </div>
    </Layout>
  );
};

export default SinglePage;
