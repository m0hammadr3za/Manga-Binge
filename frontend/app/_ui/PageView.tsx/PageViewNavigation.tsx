/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import { ChapterNavigation } from "../ChapterNavigation";
import { PageNavigation } from "../PageNavigation";
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
      <div>
        <ChapterNavigation
          previousChapterLink={previousChapterURL}
          nextChapterLink={nextChapterURL}
        />
      </div>

      <div>
        <PageNavigation
          previousPageLink={previousPageURL}
          nextPageLink={nextPageURL}
        />
      </div>
    </div>
  );
};
