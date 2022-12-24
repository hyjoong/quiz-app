import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import QuizItem from "../quizItem";
import { QuizBoxStyled } from "./style";
import { Quiz, QuizBoxProps, QuizProblem } from "./type";

const QuizBox = ({ query }: QuizBoxProps) => {
  const [quizList, setQuizList] = useState<Quiz[]>([]);
  const [quizNumber, setQuizNumber] = useState(0);
  const [shuffleOptions, setShuffleOptions] = useState<string[]>([]);

  const handleSuffleQuiz = (quiz: Quiz) => {
    return [quiz?.correct_answer, ...quiz?.incorrect_answers].sort(
      () => Math.random() - 0.5
    );
  };

  const getData = useCallback(async () => {
    try {
      const { data } = await axios.post("/api/quiz", {
        category: query.category,
        difficulty: query.difficulty,
      });
      setQuizList(data.results);
      setShuffleOptions(handleSuffleQuiz(data.results[0]));
    } catch (error) {
      throw new Error("get quiz list is failed");
    }
  }, [query]);

  useEffect(() => {
    getData();
  }, [getData, query]);

  useEffect(() => {
    if (quizNumber !== 0) {
      handleSuffleQuiz(quizList[quizNumber]);
    }
  }, [quizNumber]);

  return (
    <QuizBoxStyled>
      {shuffleOptions.map((quiz, index) => (
        <QuizItem key={index} index={index + 1}>
          {quiz}
        </QuizItem>
      ))}
    </QuizBoxStyled>
  );
};

export default QuizBox;
