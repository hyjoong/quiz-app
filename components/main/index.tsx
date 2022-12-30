import React, { useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "@store/index";
import Button from "@components/commons/Button";
import Dropdown from "@components/commons/Dropdown";
import { OptionProps } from "@type/option";
import { QUIZ_CATEGORY, QUIZ_DIFFICULTY } from "@constants/select";
import { getQuiz } from "@lib/api/quiz";
import { Quiz } from "@type/quiz";
import { Loading } from "@components/commons/Icons/Loading";

const Main = () => {
  const router = useRouter();

  const [category, setCategory] = useState<OptionProps>(QUIZ_CATEGORY[0]);
  const [difficulty, setDifficulty] = useState<OptionProps>(QUIZ_DIFFICULTY[0]);
  const [isLoading, setIsLoading] = useState(false);

  const { quizStore } = useStore();
  const handleMoveQuizPage = async () => {
    setIsLoading(true);
    const { data } = await getQuiz({
      category: category.value,
      difficulty: difficulty.value,
    });

    const converData = data.results.map((item: Quiz) => {
      return {
        ...item,
        options: [item.correct_answer, ...item.incorrect_answers].sort(
          () => Math.random() - 0.5
        ),
      };
    });
    quizStore?.setQuizList(converData);
    setIsLoading(false);
    router.push("/quiz");
  };

  return (
    <div style={{ width: "600px" }}>
      <span>Quiz Game</span>
      <div style={{ display: "flex", width: "600px" }}>
        <Dropdown
          selectList={QUIZ_CATEGORY}
          selectedItem={category}
          setSelectOption={setCategory}
        />

        <Dropdown
          selectList={QUIZ_DIFFICULTY}
          selectedItem={difficulty}
          setSelectOption={setDifficulty}
        />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button size="lg" onClick={handleMoveQuizPage} disabled={isLoading}>
          {isLoading ? <Loading /> : "퀴즈 풀기"}
        </Button>
      </div>
    </div>
  );
};

export default Main;
