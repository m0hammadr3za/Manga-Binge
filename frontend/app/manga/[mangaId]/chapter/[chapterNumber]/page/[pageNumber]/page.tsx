/* eslint-disable @typescript-eslint/no-explicit-any */
import { getChapter } from "@/mock-data/fire-punch";
import { Navbar } from "@/components/Navbar/Navbar";
import { PageViewNavigation } from "./PageViewNavigation";
import { Page } from "@/components/common/Page/Page";
import styles from "./page.module.scss";

interface PageViewProps {
  params: Promise<{ chapterNumber: string; pageNumber: string }>;
}

const PageView = async ({ params }: PageViewProps) => {
  const chapterNumber = (await params).chapterNumber;
  const pageNumber = (await params).pageNumber;

  const chapterData = getChapter(chapterNumber as string) as any;
  const { prevChapter, chapter, nextChapter } = chapterData;

  const pageNumberInt = parseInt(pageNumber, 10);
  const currentPage = chapter.pages[pageNumberInt - 1];

  return (
    <div className={styles["page-view"]}>
      <div className={styles["page-view__navbar"]}>
        <Navbar />
      </div>

      <div className={styles["page-view__content"]}>
        <PageViewNavigation
          prevChapter={prevChapter}
          chapter={chapter}
          nextChapter={nextChapter}
        />

        <div className={styles["page-view__pages-container"]}>
          <Page
            image={currentPage.src}
            imageTitle={`${currentPage.pageNumber}`}
            width={currentPage.width}
            height={currentPage.height}
            isDouble={currentPage.isDouble}
          />
        </div>

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

export default PageView;
