import React, { useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "@store/index";

const useQuiz = (quizList: any) => {
  const [isAnswered, setIsAnswered] = useState<undefined | boolean>(undefined);
  const [selectOption, setSelectOption] = useState("");
  const time = performance.now() / 1000;
  const router = useRouter();

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
      setTimer(time.toFixed(2));
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
    handleSubmit,
    handleSelectOption,
    handleTryAgain,
    handlePage,
  };
};

export default useQuiz;
