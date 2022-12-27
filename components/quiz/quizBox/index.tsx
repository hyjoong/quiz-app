import React, { useEffect, useState } from "react";
import QuizItem from "../quizItem";
import { ButtonWrapper, QuizBoxStyled, QuizList } from "./style";
import { PageProps } from "@pages/quiz/type";
import Button from "@components/commons/Button";
import { Quiz } from "@type/quiz";

const QuizBox = ({ quizList }: PageProps) => {
  const [quizNumber, setQuizNumber] = useState(0);
  const [shuffleOptions, setShuffleOptions] = useState<string[]>([]);
  const [selectOption, setSelectOption] = useState("");
  const [isAnswered, setIsAnswered] = useState<undefined | boolean>(undefined);

  const handleSuffleQuiz = (quiz: Quiz) => {
    return [quiz?.correct_answer, ...quiz?.incorrect_answers].sort(
      () => Math.random() - 0.5
    );
  };

  const handleSelectOption = (option: string) => {
    if (isAnswered !== undefined) return;
    setSelectOption(option);
  };

  const handleSubmit = () => {
    const isAnswered = selectOption === quizList[quizNumber].correct_answer;
    setIsAnswered(isAnswered);
  };

  const handleTryAgain = () => {
    setIsAnswered(undefined);
    setSelectOption("");
    handleSuffleQuiz(quizList[quizNumber]);
  };

  const handleMakeQuizQuery = (category: string, difficulty: string) => {
    const categoryQuery = `${
      category === "all" ? "" : `&category=${category}`
    }`;

    const difficultyQuery = `${
      difficulty === "all" ? "" : `&difficulty=${difficulty}`
    }`;
    return categoryQuery + difficultyQuery;
  };

  const handlePage = () => {
    // QuizNumber === 문제.length 면 다음문제 버튼 비활성화
    setQuizNumber((prev) => prev + 1);
    setSelectOption("");
    setIsAnswered(undefined);
  };

  const unEscapeHtml = (content: string) => {
    if (content == null) {
      return "";
    }
    return content
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&#39;/g, "'");
  };

  useEffect(() => {
    setShuffleOptions(handleSuffleQuiz(quizList[quizNumber]));
  }, [quizNumber]);

  return (
    <QuizBoxStyled>
      <p>난이도 : {quizList[quizNumber].difficulty}</p>
      <div className="quiz-header">
        <p>{unEscapeHtml(quizList[quizNumber]?.question)}</p>
      </div>
      <QuizList>
        {shuffleOptions.map((quiz, index) => (
          <QuizItem
            key={index}
            index={index + 1}
            isAnswered={isAnswered}
            answerOption={quizList[quizNumber].correct_answer}
            selectOption={selectOption}
            handleSelectOption={handleSelectOption}
            optionContent={quiz}
          />
        ))}
      </QuizList>
      <ButtonWrapper>
        <Button
          size="lg"
          onClick={isAnswered === undefined ? handleSubmit : handleTryAgain}
          StyleType={isAnswered === undefined ? "filled" : "normal"}
        >
          {isAnswered === undefined ? "정답 확인" : "다시 풀기"}
        </Button>
        <Button
          size="lg"
          onClick={handlePage}
          disabled={isAnswered === undefined}
          isDisabled={isAnswered === undefined}
        >
          다음 문제
        </Button>
      </ButtonWrapper>
    </QuizBoxStyled>
  );
};

export default QuizBox;
