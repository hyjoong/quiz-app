import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useStore } from "@store/index";
import Button from "@components/commons/Button";

const index = () => {
  const {
    correctCount,
    inCorrectCount,
    timer,
    setQuizList,
    setCorrectNumber,
    setInCorrectNumber,
    setTimer,
    setQuizNumber,
  } = useStore()?.quizStore;

  const router = useRouter();

  useEffect(() => {
    setQuizList([]);
    setCorrectNumber(0);
    setInCorrectNumber(0);
    setTimer("0");
    setQuizNumber(0);
  }, []);

  return (
    <div>
      <p>정답 : {correctCount}</p>
      <p>오답 : {inCorrectCount}</p>
      <p>걸린 시간: {timer}초</p>
      <Button size="md" onClick={() => router.push("/")}>
        홈으로
      </Button>
    </div>
  );
};

export default index;
