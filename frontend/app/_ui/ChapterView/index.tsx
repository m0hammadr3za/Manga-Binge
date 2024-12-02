/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import { Fragment } from "react";
import { getChapter } from "@/app/_mock-data/fire-punch";
import { ChapterNavigation } from "../ChapterNavigation";
import { Page } from "../Page";
import styles from "./styles.module.scss";

export const ChapterView = () => {
  const { mangaId, chapterNumber } = useParams();

  const chapterData = getChapter(chapterNumber as string);
  const { prevChapter, chapter, nextChapter } = chapterData as any;

  const previousChapterLink = prevChapter
    ? `/manga/${mangaId}/chapter/${prevChapter.number}`
    : null;

  const nextChapterLink = nextChapter
    ? `/manga/${mangaId}/chapter/${nextChapter.number}`
    : null;

  const pages = chapter.pages;

  return (
    <div className={styles["chapter-view"]}>
      <ChapterNavigation
        previousChapterLink={previousChapterLink}
        nextChapterLink={nextChapterLink}
      />

      <div className={styles["chapter-view__pages-container"]}>
        {pages.map((page: any) => {
          return (
            <Fragment key={page.pageNumber}>
              <Page
                image={page.src}
                imageTitle={`${page.pageNumber}`}
                width={page.width}
                height={page.height}
              />
            </Fragment>
          );
        })}
      </div>

      <ChapterNavigation
        previousChapterLink={previousChapterLink}
        nextChapterLink={nextChapterLink}
      />
    </div>
  );
};
