/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getChapter } from "./chapters";

export const ContinuousReading = () => {
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
    <StyledContinuousReading>
      <div>
        {chapters.map((chapter: any, chapterIndex: number) => {
          const isLastChapter = chapterIndex === chapters.length - 1;

          return (
            <div key={chapterIndex}>
              <ChapterTitle>Chapter {chapterIndex + 1}</ChapterTitle>

              {chapter.pages.map((page: any, pageIndex: number) => {
                const isLastPage = pageIndex === chapter.pages.length - 1;
                const isDoublePage = page.width > page.height;

                return (
                  <PageContainer
                    key={page.src}
                    ref={isLastChapter && isLastPage ? triggerPageRef : null}
                    isDoublePage={isDoublePage}
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
      </div>
    </StyledContinuousReading>
  );
};

const StyledContinuousReading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const ChapterTitle = styled.h1`
  font-size: 58px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

const PageContainer = styled.div<{ isDoublePage: boolean }>`
  width: ${({ isDoublePage }) => (isDoublePage ? "1600px" : "800px")};
  background-color: #8a8a8a;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;

const Page = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const FinishedMessage = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  padding: 30px 0 75px 0;
`;
