import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useStore } from "@store/index";
import Button from "@components/commons/Button";
import { InfoBox, ResultInfoStyled } from "./style";

const ResultInfo = () => {
  const router = useRouter();

  const { setResetStore, correctCount, inCorrectCount, timer } =
    useStore()?.quizStore;

  useEffect(() => {
    setResetStore();
  }, [setResetStore, router]);

  return (
    <ResultInfoStyled>
      <InfoBox>
        <p>정답 : {correctCount}</p>
        <p>오답 : {inCorrectCount}</p>
        <p>걸린 시간: {timer}초</p>
        <Button size="md" onClick={() => router.push("/")}>
          홈으로
        </Button>
      </InfoBox>
    </ResultInfoStyled>
  );
};

export default ResultInfo;
