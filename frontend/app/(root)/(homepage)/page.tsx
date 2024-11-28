// import Image from "next/image";
import { Layout } from "@/app/_ui/Layout";
import MangaCard from "@/app/_ui/MangaCard";
import { Fragment } from "react";
import { mockData } from "./mock-data";
import { Navbar } from "@/app/_ui/Navbar";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <Layout>
      <div className={styles["home__content"]}>
        <Navbar />

        <div className={styles["home__manga-list"]}>
          {mockData.map((manga) => {
            return (
              <Fragment key={manga.id}>
                <MangaCard manga={manga} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
