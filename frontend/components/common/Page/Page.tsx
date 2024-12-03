import Image from "next/image";
import styles from "./Page.module.scss";

interface PageProps {
  image: string;
  width: number;
  height: number;
  imageTitle: string;
  isDouble?: boolean;
}

export const Page = (props: PageProps) => {
  const { image, width, height, imageTitle, isDouble } = props;

  return (
    <div
      className={`${styles["page"]} ${isDouble ? styles["page--double"] : ""}`}
    >
      <Image
        src={image}
        alt={imageTitle}
        width={width}
        height={height}
        layout="intrinsic"
      />
    </div>
  );
};
