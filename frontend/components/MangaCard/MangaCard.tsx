import Link from "next/link";
import { Cover } from "./Cover";
import { Info } from "./Info";
import styles from "./MangaCard.module.scss";

export interface Manga {
  id: string;
  title: string;
  cover_image: string;
  chapters_count: number;
  view_count: number;
  rating: number;
}

interface MangaCardProps {
  manga: Manga;
}

export const MangaCard: React.FC<MangaCardProps> = (props) => {
  const { manga } = props;
  const { id, title, cover_image, chapters_count, view_count, rating } = manga;

  return (
    <Link href={`/manga/${id}`} className={styles["manga-card"]}>
      <Cover image={cover_image} imageTitle={title} chapter={chapters_count} />

      <Info
        title={title}
        author="Tatsuki Fujimoto"
        view_count={view_count}
        rating={rating}
      />
    </Link>
  );
};
