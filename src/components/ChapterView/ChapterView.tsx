/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChapter } from "../ContinuousReading/chapters";
import styled from "styled-components";

export const ChapterView = () => {
  const { id } = useParams<any>();
  const chapterNumber = Number(id);

  const [chapter, setChapter] = useState<any>(null);

  useEffect(() => {
    const chapterData = getChapter(chapterNumber);
    console.log(chapterData);
    setChapter(chapterData);
  }, []);

  if (!chapter)
    return (
      <StyledChapterView>
        <Title>Chapter doesn't exist!</Title>
      </StyledChapterView>
    );

  const previousChapter = getChapter(chapterNumber - 1);
  const nextChapter = getChapter(chapterNumber + 1);

  const navigation = (
    <ButtonsContainer>
      <div>
        {previousChapter && (
          <Button>
            <a href={`./${chapterNumber - 1}`}>Previous Chapter</a>
          </Button>
        )}
      </div>

      <div>
        {nextChapter && (
          <Button>
            <a href={`./${chapterNumber + 1}`}>Next Chapter</a>
          </Button>
        )}
      </div>
    </ButtonsContainer>
  );

  return (
    <StyledChapterView>
      <div>
        {navigation}

        <div>
          <Title>Chapter {chapterNumber}</Title>

          {chapter.pages.map((page: any) => {
            console.log(page);
            const isDoublePage = page.width > page.height;

            return (
              <PageContainer key={page.src} isDoublePage={isDoublePage}>
                <Page
                  src={`/public/${page.src}`}
                  width={page.width}
                  height={page.height}
                />
              </PageContainer>
            );
          })}
        </div>

        {navigation}
      </div>
    </StyledChapterView>
  );
};

const StyledChapterView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 28px;
  color: #2a71ff;
`;

const Title = styled.h1`
  font-size: 58px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

const PageContainer = styled.div<{ isDoublePage: boolean }>`
  width: ${({ isDoublePage }) => (isDoublePage ? "1600px" : "800px")};
  background-color: #8c8c8c;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;

const Page = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
