import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "@store/index";

const useQuiz = (quizList: any) => {
  const [isAnswered, setIsAnswered] = useState<undefined | boolean>(undefined);
  const [selectOption, setSelectOption] = useState("");
  const router = useRouter();
  const [elapsedTime, setElapsedTime] = useState("0:00");

  useEffect(() => {
    let start = Date.now();
    const intervalId = setInterval(() => {
      const elapsed = Date.now() - start;
      const minutes = Math.floor(elapsed / 60000);
      const seconds = ((elapsed % 60000) / 1000).toFixed(0);
      setElapsedTime(`${minutes}:${seconds.padStart(2, "0")}`);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const {
    correctCount,
    inCorrectCount,
    setCorrectNumber,
    setInCorrectNumber,
    setTimer,
    quizNumber,
    setQuizNumber,
  } = useStore()?.quizStore;

  const handleSubmit = () => {
    const isAnswered = selectOption === quizList[quizNumber].correct_answer;
    isAnswered
      ? setCorrectNumber(correctCount + 1)
      : setInCorrectNumber(inCorrectCount + 1);
    setIsAnswered(isAnswered);
  };

  const handleSelectOption = (option: string) => {
    if (isAnswered !== undefined) return;
    setSelectOption(option);
  };

  const handleTryAgain = () => {
    setIsAnswered(undefined);
    setSelectOption("");
    if (isAnswered) {
      setCorrectNumber(correctCount - 1);
    } else {
      setInCorrectNumber(inCorrectCount - 1);
    }
  };

  const handlePage = () => {
    if (quizList.length === quizNumber + 1) {
      setTimer(elapsedTime);
      router.push("/result");
      return;
    }
    setQuizNumber(quizNumber + 1);
    setSelectOption("");
    setIsAnswered(undefined);
  };

  return {
    isAnswered,
    selectOption,
    correctCount,
    inCorrectCount,
    quizNumber,
    elapsedTime,
    handleSubmit,
    handleSelectOption,
    handleTryAgain,
    handlePage,
  };
};

export default useQuiz;
