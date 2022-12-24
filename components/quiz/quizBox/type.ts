import { NextParsedUrlQuery } from "next/dist/server/request-meta";
import { QuizBoxStyled } from "./style";
import { ComponentPropsWithoutRef } from "react";

export interface QuizBoxProps
  extends ComponentPropsWithoutRef<typeof QuizBoxStyled> {
  query: NextParsedUrlQuery;
}

export interface Quiz {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuizProblem = Pick<Quiz, "correct_answer" | "incorrect_answers">;
