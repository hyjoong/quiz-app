import React from "react";
import QuizBox from "@components/quiz/quizBox";
import { GetServerSideProps } from "next";
import { PageProps } from "./type";
import BaseLayout from "@components/commons/BaseLayout";
import { getQuiz } from "@lib/api/quiz";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const handleMakeQuizQuery = (category: string, difficulty: string) => {
    const categoryQuery = `${
      category === "all" ? "" : `&category=${category}`
    }`;

    const difficultyQuery = `${
      difficulty === "all" ? "" : `&difficulty=${difficulty}`
    }`;
    return categoryQuery + difficultyQuery;
  };

  const requestQuery = handleMakeQuizQuery(
    String(query.category),
    String(query.difficulty)
  );

  const { data } = await getQuiz({
    query: requestQuery,
  });
  return { props: { quizList: data.results } };
};

const Quiz = ({ quizList }: PageProps) => {
  return (
    <BaseLayout>
      <QuizBox quizList={quizList} />
    </BaseLayout>
  );
};

export default Quiz;
