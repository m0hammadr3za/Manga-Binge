/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getChapter } from "./chapters";

export const ContinuousScroll = () => {
  const [chapters, setChapters] = useState<any>([]);
  const [isFinished, setIsFinished] = useState(false);
  const triggerPageRef = useRef(null);

  useEffect(() => {
    const initialChapter = getChapter(1);
    setChapters([initialChapter]);
  }, []);

  useEffect(() => {
    const triggerPage = triggerPageRef.current;
    if (!triggerPage) return;

    const handleIntersection = () => {
      const newChapter = getChapter(chapters.length + 1);
      if (!newChapter) {
        setIsFinished(true);
      } else {
        setChapters((previousChapters: any) => [
          ...previousChapters,
          newChapter,
        ]);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) handleIntersection();
      },
      { threshold: 0 }
    );

    observer.observe(triggerPage);
    return () => observer.unobserve(triggerPage);
  }, [chapters, triggerPageRef]);

  return (
    <StyledContinuousScroll>
      <ScrollBar>
        {chapters.map((chapter: any, chapterIndex: number) => {
          const isLastChapter = chapterIndex === chapters.length - 1;

          return (
            <div key={chapterIndex}>
              <ChapterTitle>Chapter {chapterIndex + 1}</ChapterTitle>

              {chapter.pages.map((page: any, pageIndex: number) => {
                const isLastPage = pageIndex === chapter.pages.length - 1;

                return (
                  <PageContainer
                    key={page.src}
                    ref={isLastChapter && isLastPage ? triggerPageRef : null}
                  >
                    <Page
                      src={page.src}
                      width={page.width}
                      height={page.height}
                    />
                  </PageContainer>
                );
              })}
            </div>
          );
        })}

        {isFinished && (
          <FinishedMessage>You have reached the end!</FinishedMessage>
        )}
      </ScrollBar>
    </StyledContinuousScroll>
  );
};

const StyledContinuousScroll = styled.div`
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

const PageContainer = styled.div`
  width: 100%;
  background-color: #333333;
  margin-bottom: 50px;
`;

const Page = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const FinishedMessage = styled.h1`
  color: #e9e9e9;
  text-align: center;
  padding: 30px 0 75px 0;
`;
