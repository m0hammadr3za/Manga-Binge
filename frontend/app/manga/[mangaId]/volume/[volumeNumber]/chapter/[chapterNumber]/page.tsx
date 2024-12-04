"use client";

import { useState } from "react";
import { getChapter } from "@/mock-data/fire-punch";
import { Navbar } from "@/components/Navbar/Navbar";
import { ContinuousReading } from "@/components/ContinuousReading/ContinuousReading";
import styles from "./page.module.scss";

const VolumeView = () => {
  const firstChapterData = getChapter("1");

  const [chapters, setChapters] = useState([firstChapterData?.chapter]);
  const [nextChapterNumber, setNextChapterNumber] = useState(
    firstChapterData?.nextChapter?.number as string
  );
  const [isFinished, setIsFinished] = useState(false);

  const loadNextChapter = () => {
    const nextChapterData = getChapter(nextChapterNumber);

    const newNextChapterNumber = nextChapterData?.nextChapter?.number;
    const nextChapter = nextChapterData?.chapter;
    setChapters((prevChapters) => [...prevChapters, nextChapter]);

    if (!nextChapterData?.nextChapter) {
      setIsFinished(true);
    } else {
      setNextChapterNumber(newNextChapterNumber as string);
    }
  };

  return (
    <div className={styles["volume-view"]}>
      <div className={styles["volume-view__navbar"]}>
        <Navbar />
      </div>

      <div className={styles["volume-view__content"]}>
        <ContinuousReading
          chapters={chapters}
          loadNextChapter={loadNextChapter}
          isFinished={isFinished}
        />
      </div>
    </div>
  );
};

export default VolumeView;
