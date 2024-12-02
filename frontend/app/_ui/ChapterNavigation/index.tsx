import { NavButton } from "../NavButton";
import styles from "./styles.module.scss";

interface ChapterNavigationProps {
  previousChapterLink: string | null;
  nextChapterLink: string | null;
}

export const ChapterNavigation = (props: ChapterNavigationProps) => {
  const { previousChapterLink, nextChapterLink } = props;

  return (
    <div className={styles["chapter-navigation"]}>
      <div>
        {previousChapterLink && (
          <NavButton href={previousChapterLink}>Previous Chapter</NavButton>
        )}
      </div>

      <div>
        {nextChapterLink && (
          <NavButton href={nextChapterLink}>Next Chapter</NavButton>
        )}
      </div>
    </div>
  );
};
