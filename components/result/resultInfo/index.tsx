import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useStore } from "@store/index";
import Button from "@components/commons/Button";
import { InfoBox, ResultInfoStyled } from "./style";
import dynamic from "next/dynamic";
import { Pie } from "@components/chart/pieChart/type";

const ResultInfo = () => {
  const PieChart = dynamic(() => import("@components/chart/pieChart"), {
    ssr: false,
  });
  const router = useRouter();

  const { setResetStore, correctCount, inCorrectCount, timer } =
    useStore()?.quizStore;

  useEffect(() => {
    setResetStore();
  }, [setResetStore, router]);

  const chartData: Pie[] = [
    {
      id: "correct",
      value: correctCount,
      color: "hsl(228, 72.13930348258705%, 39.411764705882355%)",
    },
    {
      id: "wrong",
      value: inCorrectCount,
      color: "hsl(5.930232558139535, 87.75510204081634%, 38.431372549019606%)",
    },
  ];

  return (
    <ResultInfoStyled>
      <PieChart data={chartData} />
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
