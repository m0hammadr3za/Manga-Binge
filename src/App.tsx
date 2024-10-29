import styled from "styled-components";
import { ContinuousReading } from "./components/ContinuousReading/ContinuousReading";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";
import { useControllerNavigation } from "./hooks/useControllerNavigation";
import { Route, Routes } from "react-router-dom";
import { ChapterView } from "./components/ChapterView/ChapterView";

export const App = () => {
  useKeyboardNavigation(500, 2500, 5);
  useControllerNavigation(5, 25, 5);

  return (
    <Container>
      <Title>Working as intended!</Title>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link href="/continuous">Continuous {`Reading >>>`}</Link>
              <Link href="/chapter/1">Chapter 1</Link>
            </div>
          }
        />

        <Route path="/continuous" element={<ContinuousReading />} />

        <Route path="/chapter/:id" element={<ChapterView />} />

        <Route path="*" element={<Title>NOT FOUND!</Title>} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: #141414;
`;

const Title = styled.h1`
  color: #e9e9e9;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 90px;
`;

const Link = styled.a`
  display: block;
  font-size: 28px;
  color: #2a71ff;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;
