import { NavButton } from "../NavButton/NavButton";
import styles from "./PageNavigation.module.scss";

interface PageNavigationProps {
  previousPageLink: string | null;
  nextPageLink: string | null;
}

export const PageNavigation = (props: PageNavigationProps) => {
  const { previousPageLink, nextPageLink } = props;

  return (
    <div className={styles["page-navigation"]}>
      <div>
        {previousPageLink && (
          <NavButton href={previousPageLink}>{`<<<`}</NavButton>
        )}
      </div>

      <div>
        {nextPageLink && <NavButton href={nextPageLink}>{`>>>`}</NavButton>}
      </div>
    </div>
  );
};
