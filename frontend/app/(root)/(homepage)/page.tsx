// import Image from "next/image";
import styles from "./styles.module.scss";
import { Layout } from "@/app/_ui/Layout";
import MangaCard from "../../_ui/MangaCard";
import { Fragment } from "react";
import { mockData } from "./mock-data";

const Home = () => {
  return (
    <Layout>
      <div className={styles["home__manga-list"]}>
        {mockData.map((manga) => {
          return (
            <Fragment key={manga.id}>
              <MangaCard manga={manga} />
            </Fragment>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
