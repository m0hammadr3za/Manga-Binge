/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import { ChapterNavigation } from "@/components/common/ChapterNavigation/ChapterNavigation";
import { PageNavigation } from "@/components/common/PageNavigation/PageNavigation";
import styles from "./PageViewNavigation.module.scss";

interface PageNavigationProps {
  prevChapter: any;
  chapter: any;
  nextChapter: any;
  reverseDirection?: boolean;
}

export const PageViewNavigation = (props: PageNavigationProps) => {
  const { prevChapter, chapter, nextChapter, reverseDirection } = props;

  const params = useParams();
  const mangaId = params["mangaId"] as string;
  const chapterNumber = params["chapterNumber"];
  const pageNumber = parseInt(params["pageNumber"] as string, 10);

  const previousChapterURL = prevChapter
    ? `/manga/${mangaId}/chapter/${prevChapter.number}/page/1`
    : null;

  const nextChapterURL = nextChapter
    ? `/manga/${mangaId}/chapter/${nextChapter.number}/page/1`
    : null;

  const previousPage = chapter.pages[pageNumber - 2];
  const previousPageURL = previousPage
    ? `/manga/${mangaId}/chapter/${chapterNumber}/page/${pageNumber - 1}`
    : null;

  const nextPage = chapter.pages[pageNumber];
  const nextPageURL = nextPage
    ? `/manga/${mangaId}/chapter/${chapterNumber}/page/${pageNumber + 1}`
    : null;

  return (
    <div
      className={`${styles["page-view-navigation"]} ${
        reverseDirection && styles["page-view-navigation--reverse"]
      }`}
    >
      <div className={styles["page-view-navigation__chapter-navigation"]}>
        <ChapterNavigation
          previousChapterLink={previousChapterURL}
          nextChapterLink={nextChapterURL}
        />
      </div>

      <div className={styles["page-view-navigation__page-navigation"]}>
        <PageNavigation
          previousPageLink={previousPageURL}
          nextPageLink={nextPageURL}
        />
      </div>
    </div>
  );
};
