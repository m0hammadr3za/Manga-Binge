/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { getChapter } from "@/mock-data/fire-punch";
import { ContinuousReading } from "@/components/ContinuousReading/ContinuousReading";

export const InfiniteScroll = ({
  firstChapterData,
}: {
  firstChapterData: any;
}) => {
  const [chapters, setChapters] = useState([firstChapterData?.chapter]);
  const [nextChapterNumber, setNextChapterNumber] = useState(
    firstChapterData?.nextChapter?.number as string
  );
  const [isFinished, setIsFinished] = useState(false);

  const loadNextChapter = () => {
    const nextChapterData = getChapter(nextChapterNumber);

    const newNextChapterNumber = nextChapterData?.nextChapter?.number;
    const nextChapter = nextChapterData?.chapter;
    setChapters((prevChapters) => [...prevChapters, nextChapter]);

    if (!nextChapterData?.nextChapter) {
      setIsFinished(true);
    } else {
      setNextChapterNumber(newNextChapterNumber as string);
    }
  };

  return (
    <ContinuousReading
      chapters={chapters}
      loadNextChapter={loadNextChapter}
      isFinished={isFinished}
    />
  );
};
