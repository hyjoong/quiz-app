import React from "react";
import { useRouter } from "next/router";
import { useStore } from "@store/index";
import Button from "@components/commons/Button";

const index = () => {
  const { correctCount, inCorrectCount,timer } = useStore()?.quizStore;

  const router = useRouter();
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
