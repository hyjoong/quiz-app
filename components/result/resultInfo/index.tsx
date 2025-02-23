import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useStore } from "@store/index";
import Button from "@components/commons/Button";
import { InfoBox, ResultInfoStyled } from "./style";
import dynamic from "next/dynamic";
import { Pie } from "@components/chart/pieChart/type";
import PieChart from "@components/chart/pieChart";

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
      color: "#38bcb2",
    },
    {
      id: "wrong",
      value: inCorrectCount,
      color: "#ff0044",
    },
  ];

  return (
    <ResultInfoStyled>
      <div className="chart-container">
        <PieChart data={chartData} />
      </div>
      <InfoBox>
        <p>정답 : {correctCount}</p>
        <p>오답 : {inCorrectCount}</p>
        <p>걸린 시간: {timer}</p>
        <Button size="md" onClick={() => router.push("/")}>
          홈으로
        </Button>
      </InfoBox>
    </ResultInfoStyled>
  );
};

export default ResultInfo;
