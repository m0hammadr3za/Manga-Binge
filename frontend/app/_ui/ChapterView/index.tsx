/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getChapter } from "@/app/_mock-data/fire-punch";
import { Page } from "../Page";
import styles from "./index.module.scss";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const ChapterView = () => {
  const pathname = usePathname();

  const lastSegment = pathname.split("/").filter(Boolean).pop() as string;
  const chapterNumber = parseInt(lastSegment, 10);

  const { prevChapter, chapter, nextChapter } = getChapter(
    chapterNumber
  ) as any;

  const pages = chapter.pages;

  const parts = pathname.split("/").filter(Boolean);
  const baseURL = parts.slice(0, -1).join("/");

  console.log(baseURL);

  return (
    <div className={styles["chapter-view"]}>
      <div className={styles["chapter-view__navigation"]}>
        <div>
          {prevChapter && (
            <Link
              className={styles["chapter-view__navigation-link"]}
              href={`/${baseURL}/${prevChapter.number}`}
            >{`Previous Chapter`}</Link>
          )}
        </div>

        <div>
          {nextChapter && (
            <Link
              className={styles["chapter-view__navigation-link"]}
              href={`/${baseURL}/${nextChapter.number}`}
            >{`Next Chapter`}</Link>
          )}
        </div>
      </div>

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

      <div className={styles["chapter-view__navigation"]}>
        <div>
          {prevChapter && (
            <Link
              className={styles["chapter-view__navigation-link"]}
              href={`/${baseURL}/${prevChapter.number}`}
            >{`Previous Chapter`}</Link>
          )}
        </div>

        <div>
          {nextChapter && (
            <Link
              className={styles["chapter-view__navigation-link"]}
              href={`/${baseURL}/${nextChapter.number}`}
            >{`Next Chapter`}</Link>
          )}
        </div>
      </div>
    </div>
  );
};
