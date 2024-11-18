/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import styled from "styled-components";
import { imagesData } from "./imageData";

const images = [...imagesData];

export const SequentialLoading = () => {
  const [loadedIndices, setLoadedIndices] = useState<any>([0]);

  const onLoadImage = () => {
    const lastLoadedIndex = loadedIndices[loadedIndices.length - 1];
    const nextIndex = lastLoadedIndex + 1;

    if (nextIndex >= images.length) return;
    setLoadedIndices((prev: any) => [...prev, nextIndex]);
  };

  return (
    <StyledSequentialLoading>
      <ContentContainer>
        {images.map((image: any, index: number) => {
          return (
            <ImageContainer key={image}>
              {loadedIndices.includes(index) ? (
                <Image
                  src={`${image.src}?v=ss${index}`} // The query at the end prevents cashing in development
                  onLoad={() => onLoadImage()}
                />
              ) : (
                <ImagePlaceholder />
              )}
            </ImageContainer>
          );
        })}
      </ContentContainer>
    </StyledSequentialLoading>
  );
};

const StyledSequentialLoading = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

const ContentContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #333333;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background-color: #333333;
  object-fit: cover;
  border-radius: 8px;
`;
