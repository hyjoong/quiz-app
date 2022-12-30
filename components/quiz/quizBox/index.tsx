import React from "react";
import { useStore } from "@store/index";
import QuizItem from "../quizItem";
import Button from "@components/commons/Button";
import {
  AnswerCount,
  AnswerResult,
  ButtonWrapper,
  QuizBoxStyled,
  QuizList,
} from "./style";
import useQuiz from "@hooks/useQuiz";
import { unEscapeHtml } from "@utils/convertText";

const QuizBox = () => {
  const { quizList } = useStore()?.quizStore;

  const {
    isAnswered,
    selectOption,
    correctCount,
    inCorrectCount,
    quizNumber,
    handleSubmit,
    handleSelectOption,
    handleTryAgain,
    handlePage,
  } = useQuiz(quizList);

  return (
    <QuizBoxStyled>
      <div className="quiz-header">
        <div>
          <p>난이도: {quizList[quizNumber]?.difficulty}</p>
          <p>
            {quizNumber + 1}/{quizList.length}
          </p>
        </div>
        <div>
          <AnswerCount isCorrect={true}>
            <p>정답: {correctCount}</p>
          </AnswerCount>
          <AnswerCount isCorrect={false}>
            <p>오답: {inCorrectCount}</p>
          </AnswerCount>
        </div>
      </div>

      <div className="quiz-question">
        <p>{unEscapeHtml(quizList[quizNumber]?.question)}</p>
      </div>
      <QuizList>
        {quizList[quizNumber]?.options?.map((quiz, index) => (
          <QuizItem
            key={index}
            index={index + 1}
            isAnswered={isAnswered}
            answerOption={quizList[quizNumber]?.correct_answer}
            selectOption={selectOption}
            handleSelectOption={handleSelectOption}
            optionContent={quiz}
          />
        ))}
      </QuizList>
      <AnswerResult isAnswered={isAnswered}>
        {isAnswered === undefined ? "" : isAnswered ? "정답" : "오답"}
      </AnswerResult>
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
          {quizList.length === quizNumber + 1 ? "결과 보기" : "다음 문제"}
        </Button>
      </ButtonWrapper>
    </QuizBoxStyled>
  );
};

export default QuizBox;
