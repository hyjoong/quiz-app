import React, { useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "@store/index";

const useQuiz = (quizList: any) => {
  const [correctCount, setCorrectCount] = useState(0);
  const [inCorrectCount, setInCorrectCount] = useState(0);
  const [isAnswered, setIsAnswered] = useState<undefined | boolean>(undefined);
  const [selectOption, setSelectOption] = useState("");
  const [quizNumber, setQuizNumber] = useState(0);
  const router = useRouter();

  const { setCorrectNumber, setInCorrectNumber } = useStore()?.quizStore;

  const handleSubmit = () => {
    const isAnswered = selectOption === quizList[quizNumber].correct_answer;
    isAnswered
      ? setCorrectCount((prev) => prev + 1)
      : setInCorrectCount((prev) => prev + 1);
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
      setCorrectCount((prev) => prev - 1);
    } else {
      setInCorrectCount((prev) => prev - 1);
    }
  };

  const handlePage = () => {
    if (quizList.length === quizNumber + 1) {
      setCorrectNumber(correctCount);
      setInCorrectNumber(inCorrectCount);
      router.push("/result");
      return;
    }
    // QuizNumber === 문제.length 면 다음문제 버튼 비활성화
    setQuizNumber((prev) => prev + 1);
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
