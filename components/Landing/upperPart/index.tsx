import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "@store/index";
import Button from "@components/commons/Button";
import Dropdown from "@components/commons/Dropdown";
import { OptionProps } from "@type/option";
import { QUIZ_CATEGORY, QUIZ_DIFFICULTY, QUIZ_NUMBER } from "@constants/select";
import { getQuiz } from "@lib/api/quiz";
import { Quiz } from "@type/quiz";
import { Loading } from "@components/commons/Icons/Loading";
import { SelectOption, StyledMain } from "./style";
import ScrollDownIndicator from "@components/commons/IndicatorBottom";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const UpperPart = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  const [category, setCategory] = useState<OptionProps>(QUIZ_CATEGORY[0]);
  const [difficulty, setDifficulty] = useState<OptionProps>(QUIZ_DIFFICULTY[0]);
  const [number, setNumber] = useState<OptionProps>(QUIZ_NUMBER[0]);
  const [isLoading, setIsLoading] = useState(false);

  const { quizStore } = useStore();
  const handleMoveQuizPage = async () => {
    setIsLoading(true);
    const { data } = await getQuiz({
      category: category.value,
      difficulty: difficulty.value,
      number: number.value,
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
    router.replace("/quiz");
  };

  return (
    <StyledMain>
      <div>
        <h1>{t("title")}</h1>
      </div>
      <div className="button-box">
        <Link href="/" locale={"en"}>
          <Button
            className="btn-lang"
            StyleType={locale === "en" ? "filled" : "normal"}
          >
            en
          </Button>
        </Link>
        <Link href="/" locale={"ko"}>
          <Button
            className="btn-lang"
            StyleType={locale === "ko" ? "filled" : "normal"}
          >
            ko
          </Button>
        </Link>
      </div>

      <div className="option-list">
        <SelectOption>
          <h3>{t("category")}</h3>
          <Dropdown
            selectList={QUIZ_CATEGORY}
            selectedItem={category}
            setSelectOption={setCategory}
          />
        </SelectOption>
        <SelectOption>
          <h3>{t("difficulty")}</h3>
          <Dropdown
            selectList={QUIZ_DIFFICULTY}
            selectedItem={difficulty}
            setSelectOption={setDifficulty}
          />
        </SelectOption>
        <SelectOption>
          <h3>{t("count")}</h3>
          <Dropdown
            selectList={QUIZ_NUMBER}
            selectedItem={number}
            setSelectOption={setNumber}
          />
        </SelectOption>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button size="lg" onClick={handleMoveQuizPage} disabled={isLoading}>
          {isLoading ? <Loading /> : t("start")}
        </Button>
      </div>
      <ScrollDownIndicator />
    </StyledMain>
  );
};

export default UpperPart;
