/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { getChapter } from "@/app/_mock-data/fire-punch";
import { Page } from "../Page";
import { NavSection } from "./NavSection";
import styles from "./index.module.scss";

export const ChapterView = () => {
  const pathname = usePathname();

  const lastSegment = pathname.split("/").filter(Boolean).pop() as string;
  const chapterNumber = parseInt(lastSegment, 10);

  const chapterData = getChapter(chapterNumber) as any;
  const { chapter } = chapterData;

  const pages = chapter.pages;

  return (
    <div className={styles["chapter-view"]}>
      <NavSection chapterData={chapterData} />

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

      <NavSection chapterData={chapterData} />
    </div>
  );
};
