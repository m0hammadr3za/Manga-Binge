import styled from "styled-components";
import { SequentialLoading } from "./components/SequentialLoading/SequentialLoading";

export const App = () => {
  return (
    <Container>
      <Title>Working as intended!</Title>
      <SequentialLoading />
    </Container>
  );
};

const Container = styled.div`
  background-color: #141414;
`;

const Title = styled.h1`
  color: #e9e9e9;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;
