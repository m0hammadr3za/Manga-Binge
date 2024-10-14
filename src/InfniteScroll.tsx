/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getChapter } from "./chapters";

const initialChapter = getChapter(1);

export const InfiniteScroll = () => {
  const [chapters, setChapters] = useState([initialChapter]);
  const [isFinished, setIsFinished] = useState(false);

  const [triggerPage, setTriggerPage] = useState<any>(null);

  useEffect(() => {
    if (!triggerPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const newChapter = getChapter(chapters.length + 1);
          if (!newChapter) {
            setIsFinished(true);
          } else {
            setChapters((previousChapters) => [
              ...previousChapters,
              newChapter,
            ]);
          }
        }
      },
      { threshold: 1 }
    );

    observer.observe(triggerPage);
    return () => observer.unobserve(triggerPage);
  }, [chapters, triggerPage]);

  return (
    <StyledInfiniteScroll>
      <ScrollBar>
        {chapters.map((chapter: any, chapterIndex: number) => {
          const isLongChapter = chapter.pages.length >= 10;
          const chapterMiddle = Math.ceil(chapter.pages.length / 2);
          const chapterEnd = chapter.pages.length - 1;

          return (
            <div key={chapterIndex}>
              <ChapterTitle>Chapter {chapterIndex + 1}</ChapterTitle>

              {chapter.pages.map((page: any, pageIndex: number) => {
                const triggerIndex = isLongChapter ? chapterMiddle : chapterEnd;
                const isTriggerPage = pageIndex === triggerIndex;

                const title = `${chapterIndex + 1}-${pageIndex + 1}`;

                return (
                  <Item key={page} ref={isTriggerPage ? setTriggerPage : null}>
                    <ItemIndexText>{title}</ItemIndexText>
                  </Item>
                );
              })}
            </div>
          );
        })}

        {isFinished && (
          <FinishedMessage>You have reached the end!</FinishedMessage>
        )}
      </ScrollBar>
    </StyledInfiniteScroll>
  );
};

const StyledInfiniteScroll = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const ScrollBar = styled.div`
  width: 600px;
`;

const ChapterTitle = styled.h1`
  font-size: 58px;
  text-align: center;
  color: #e7e7e7;
  margin-bottom: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
  background-color: #cfcfcf;
  border-radius: 10px;
  margin-bottom: 50px;
`;

const ItemIndexText = styled.p`
  font-size: 196px;
  font-weight: 700;
  color: #9e9e9e;
`;

const FinishedMessage = styled.h1`
  color: #e9e9e9;
  text-align: center;
  padding: 30px 0 75px 0;
`;
