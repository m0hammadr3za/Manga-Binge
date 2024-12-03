/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import { getChapter } from "@/mock-data/fire-punch";
import { Navbar } from "@/components/Navbar/Navbar";
import { ChapterNavigation } from "@/components/common/ChapterNavigation/ChapterNavigation";
import { Page } from "@/components/common/Page/Page";
import styles from "./page.module.scss";

interface ChapterViewProps {
  params: Promise<{ mangaId: string; chapterNumber: string }>;
}

const ChapterView = async ({ params }: ChapterViewProps) => {
  const mangaId = (await params).mangaId;
  const chapterNumber = (await params).chapterNumber;

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
      <div className={styles["chapter-view__navbar"]}>
        <Navbar />
      </div>

      <div className={styles["chapter-view__content"]}>
        <div className={styles["chapter-view__chapter-navigation"]}>
          <ChapterNavigation
            previousChapterLink={previousChapterLink}
            nextChapterLink={nextChapterLink}
          />
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
                  isDouble={page.isDouble}
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
    </div>
  );
};

export default ChapterView;
