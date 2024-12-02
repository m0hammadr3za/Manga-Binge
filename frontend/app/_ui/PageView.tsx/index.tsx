/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import { getChapter } from "@/app/_mock-data/fire-punch";
import { PageViewNavigation } from "./PageViewNavigation";
import { Page } from "../Page";
import styles from "./styles.module.scss";

export const PageView = () => {
  const params = useParams();
  const chapterNumber = params["chapterNumber"];
  const pageNumber = parseInt(params["pageNumber"] as string, 10);

  const chapterData = getChapter(chapterNumber as string) as any;
  const { prevChapter, chapter, nextChapter } = chapterData;

  const currentPage = chapter.pages[pageNumber - 1];

  return (
    <div className={styles["page-view"]}>
      <div>
        <PageViewNavigation
          prevChapter={prevChapter}
          chapter={chapter}
          nextChapter={nextChapter}
        />
      </div>

      <div className={styles["page-view__pages-container"]}>
        <Page
          image={currentPage.src}
          imageTitle={`${currentPage.pageNumber}`}
          width={currentPage.width}
          height={currentPage.height}
        />
      </div>

      <div>
        <PageViewNavigation
          prevChapter={prevChapter}
          chapter={chapter}
          nextChapter={nextChapter}
          reverseDirection
        />
      </div>
    </div>
  );
};
