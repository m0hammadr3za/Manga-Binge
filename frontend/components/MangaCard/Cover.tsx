import Image from "next/image";
import styles from "./Cover.module.scss";

interface CoverProps {
  image: string;
  imageTitle: string;
  chapter: number;
}

export const Cover = (props: CoverProps) => {
  const { image, imageTitle, chapter } = props;

  return (
    <div className={styles["cover"]}>
      <div className={styles["cover__image-container"]}>
        <Image
          className={styles["cover__cover-image"]}
          src={image}
          alt={imageTitle}
          fill
          priority
        />
      </div>

      <div className={styles["cover__chapter-container"]}>
        <div className={styles["cover__chapter-background"]} />
        <p className={styles["cover__chapter"]}>#{chapter}</p>
      </div>
    </div>
  );
};
