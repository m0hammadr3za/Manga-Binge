import { LightText } from "./LightText";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";
import styles from "./Info.module.scss";

interface InfoProps {
  title: string;
  author: string;
  view_count: number;
  rating: number;
}

export const Info = (props: InfoProps) => {
  const { title, author, view_count, rating } = props;

  const formatViews = (views: number): string => {
    if (views < 1000) {
      return views.toString();
    } else if (views < 1_000_000) {
      return (views / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return (views / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }
  };

  const formatRating = (rating: number): string => {
    return rating.toFixed(2).replace(/\.?0+$/, "");
  };

  return (
    <div className={styles["info"]}>
      <div className={styles["info__primary"]}>
        <Title>{title}</Title>

        <Subtitle>{author}</Subtitle>
      </div>

      <div className={styles["info__secondary"]}>
        <LightText>{formatViews(view_count)} views</LightText>

        <LightText>{formatRating(rating)} rating</LightText>
      </div>
    </div>
  );
};
