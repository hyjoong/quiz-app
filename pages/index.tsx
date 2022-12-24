import { BaseLayoutStyled } from "@components/commons/BaseLayout/style";
import Button from "@components/commons/Button";
import React from "react";

const Home = () => {
  return (
    <BaseLayoutStyled>
      <p>Quiz Game</p>
      <Button>퀴즈 풀기</Button>
    </BaseLayoutStyled>
  );
};

export default Home;
