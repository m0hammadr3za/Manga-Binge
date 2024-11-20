import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

export interface Manga {
  id: string;
  title: string;
  demographic: string; // Enum of Shonen and Seinen
  description: string;
  author_id: string[]; // Foreign keys to author.id
  status: string; // 'ongoing', 'completed', etc.
  cover_image: string;
  tags: string[]; // Foreign keys to tag.id
  chapters_count: number;
  view_count: number;
  rating: number;
  save_count: number;
  release_date: string;
  created_at: string;
}

interface MangaCardProps {
  manga: Manga;
}

const MangaCard: React.FC<MangaCardProps> = ({ manga }) => {
  return (
    <Link href={`/manga/${manga.id}`} className={styles["manga-card"]}>
      <div className={styles["manga-card__image-container"]}>
        <Image
          className={styles["manga-card__cover-image"]}
          src={manga.cover_image}
          alt={manga.title}
          fill
          priority
        />
      </div>

      <div className={styles["manga-card__info-container"]}>
        <div className={styles["manga-card__title-author-container"]}>
          <h2 className={styles["manga-card__title"]}>{manga.title}</h2>

          <p className={styles["manga-card__author"]}>Tatsuki Fujimoto</p>
        </div>

        <div className={styles["manga-card__view-rating-container"]}>
          <p className={styles["manga-card__rating"]}>{manga.rating} rating</p>

          <p className={styles["manga-card__view-count"]}>
            {manga.view_count} views
          </p>
        </div>
      </div>
    </Link>
  );
};

{
  /* <div className={styles.imageWrapper}>
<Image
  src={manga.cover_image}
  alt={manga.title}
  className={styles.image}
  fill
  sizes="(max-width: 600px) 100vw, 300px"
  priority
/>
{manga.status && (
  <span className={styles.statusBadge}>{manga.status}</span>
)}
</div>
<div className={styles.content}>
<h2 className={styles.title}>{manga.title}</h2>
<p className={styles.demographic}>{manga.demographic}</p>
<p className={styles.description}>
  {manga.description.slice(0, 100)}...
</p>
<div className={styles.meta}>
  <span>{manga.chapters_count} Chapters</span>
  <span>Rating: {manga.rating.toFixed(1)}</span>
</div>
</div> */
}

export default MangaCard;
