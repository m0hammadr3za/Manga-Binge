"use client";

import { usePathname } from "next/navigation";
import { NavButton } from "./NavButton";
import styles from "./NavSection.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NavSection = ({ chapterData }: { chapterData: any }) => {
  const pathname = usePathname();
  const { prevChapter, nextChapter } = chapterData;

  const parts = pathname.split("/").filter(Boolean);
  const baseURL = parts.slice(0, -1).join("/");

  return (
    <div className={styles["nav-section"]}>
      <div>
        {prevChapter && (
          <NavButton href={`/${baseURL}/${prevChapter.number}`}>
            Previous Chapter
          </NavButton>
        )}
      </div>

      <div>
        {nextChapter && (
          <NavButton href={`/${baseURL}/${nextChapter.number}`}>
            Next Chapter
          </NavButton>
        )}
      </div>
    </div>
  );
};
