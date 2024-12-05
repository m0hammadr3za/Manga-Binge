import { getChapter } from "@/mock-data/fire-punch";
import { Navbar } from "@/components/Navbar/Navbar";
import { ChapterNavigation } from "@/components/common/ChapterNavigation/ChapterNavigation";
import { InfiniteScroll } from "./InfiniteScroll";
import styles from "./page.module.scss";

interface VolumeViewProps {
  params: Promise<{ chapterNumber: string }>;
}

const VolumeView = async ({ params }: VolumeViewProps) => {
  const chapterNumber = (await params).chapterNumber;
  const firstChapterData = getChapter(chapterNumber);

  const baseURL = `/manga/1/volume/1/chapter/`;

  const previousChapterNumber = firstChapterData?.prevChapter?.number;
  const previousChapterURL = previousChapterNumber
    ? `${baseURL}${previousChapterNumber}`
    : null;

  const nextChapterNumber = firstChapterData?.nextChapter?.number;
  const nextChapterURL = nextChapterNumber
    ? `${baseURL}${nextChapterNumber}`
    : null;

  return (
    <div className={styles["volume-view"]}>
      <div className={styles["volume-view__navbar"]}>
        <Navbar />

        <ChapterNavigation
          previousChapterLink={previousChapterURL}
          nextChapterLink={nextChapterURL}
        />
      </div>

      <div className={styles["volume-view__content"]}>
        <InfiniteScroll firstChapterData={firstChapterData} />
      </div>
    </div>
  );
};

export default VolumeView;
