import CheckDefault from "@components/commons/Icons/CheckDefaultIcon";
import CheckIcon from "@components/commons/Icons/CheckIcon.tsx";
import XIcon from "@components/commons/Icons/XIcon.tsx";
import { unEscapeHtml } from "@utils/convertText";
import React from "react";
import { QuizItemStyled } from "./style";
import { QuizItemProps } from "./type";

const QuizItem = ({
  index,
  isAnswered,
  optionContent,
  answerOption,
  selectOption,
  handleSelectOption,
  ...props
}: QuizItemProps) => {
  return (
    <QuizItemStyled
      // isAnswered={selectOption === optionContent ? isAnswered : undefined}
      isAnswered={
        isAnswered !== undefined
          ? answerOption === optionContent
            ? true
            : selectOption === optionContent
            ? false
            : undefined
          : undefined
      }
      onClick={() => handleSelectOption(optionContent)}
      isSelected={selectOption === optionContent}
      {...props}
    >
      <div className="quizContent">
        <p className="index">{index}. </p>
        <p>{unEscapeHtml(optionContent)}</p>
      </div>

      {selectOption === optionContent && isAnswered === undefined ? (
        <CheckDefault />
      ) : isAnswered === undefined ? null : selectOption === optionContent ? (
        isAnswered ? (
          <CheckIcon />
        ) : (
          <XIcon />
        )
      ) : answerOption === optionContent ? (
        <CheckIcon />
      ) : null}
    </QuizItemStyled>
  );
};

export default QuizItem;
