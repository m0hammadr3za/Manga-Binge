// import Image from "next/image";
import { Fragment } from "react";
import { mangaList } from "../mock-data/manga-list";
import { Navbar } from "@/components/Navbar/Navbar";
import { MangaCard } from "@/components/MangaCard/MangaCard";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles["home"]}>
      <div>
        <Navbar />
      </div>

      <div className={styles["home__manga-list"]}>
        {mangaList.map((manga) => {
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
