import { QuizItemStyled } from "./style";
import { ComponentPropsWithoutRef } from "react";

export interface QuizItemProps
  extends ComponentPropsWithoutRef<typeof QuizItemStyled> {
  optionContent: string;
  selectOption: string;
  index: number;
  answerOption: string;
  handleSelectOption: (option: string) => void;
}
