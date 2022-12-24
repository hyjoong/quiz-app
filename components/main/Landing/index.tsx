import React, { Fragment, useState } from "react";
import Button from "@components/commons/Button";
import Dropdown from "@components/commons/Dropdown";
import { useStore } from "@store/index";
import { OptionProps } from "@type/option";
import { QUIZ_CATEGORY, QUIZ_DIFFICULTY } from "@constants/select";
import { useRouter } from "next/router";

const Landing = () => {
  const router = useRouter();

  const [category, setCategory] = useState<OptionProps>(QUIZ_CATEGORY[0]);
  const [difficulty, setDifficulty] = useState<OptionProps>(QUIZ_DIFFICULTY[0]);

  const handleMoveQuizPage = () => {
    router.push(
      `/quiz?category=${category.value}&difficulty=${difficulty.value}`
    );
  };

  return (
    <Fragment>
      <p>Quiz Game</p>
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
      <Button size="lg" onClick={handleMoveQuizPage}>
        퀴즈 풀기
      </Button>
    </Fragment>
  );
};

export default Landing;
