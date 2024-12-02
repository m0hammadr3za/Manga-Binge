// import Image from "next/image";
import MangaCard from "@/app/_ui/MangaCard";
import { Fragment } from "react";
import { mockData } from "./mock-data";
import { Navbar } from "@/app/_ui/Navbar";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles["home"]}>
      <div>
        <Navbar />
      </div>

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
  );
};

export default Home;
