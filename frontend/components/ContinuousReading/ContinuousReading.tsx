/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import { Page } from "../common/Page/Page";
import styles from "./ContinuousReading.module.scss";

interface ContinuousReadingProps {
  chapters: any[];
  loadNextChapter: () => void;
  isFinished: boolean;
}

export const ContinuousReading = (props: ContinuousReadingProps) => {
  const { chapters, loadNextChapter, isFinished } = props;

  const lastPageRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // If all chapters are loaded, do not set up the observer
    if (isFinished) return;

    // If there's no last page to observe, return
    if (!lastPageRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadNextChapter();
        }
      },
      {
        root: null, // Uses the viewport as the container
        threshold: 0.1, // Trigger when 10% of the target is visible
      }
    );

    observer.observe(lastPageRef.current);
    observerRef.current = observer;

    // Cleanup on unmount or when dependencies change
    return () => {
      observer.disconnect();
    };
  }, [chapters, loadNextChapter, isFinished]);

  return (
    <div className={styles["continuous-reading"]}>
      {chapters.map((chapter, chapterIndex) => {
        const pages = chapter.pages;
        const isLastChapter = chapterIndex === chapters.length - 1;

        return (
          <div
            key={chapter.number}
            className={styles["continuous-reading__chapter"]}
          >
            {pages.map((page: any, pageIndex: number) => {
              const isLastPage = pageIndex === pages.length - 1;
              const isLastPageOfLastChapter = isLastChapter && isLastPage;

              return (
                <div
                  key={page.pageNumber}
                  ref={isLastPageOfLastChapter ? lastPageRef : null}
                  className={styles["continuous-reading__page"]}
                >
                  <Page
                    image={page.src}
                    imageTitle={`${page.pageNumber}`}
                    width={page.width}
                    height={page.height}
                    isDouble={page.isDouble}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
