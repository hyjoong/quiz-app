import { Quiz } from "@type/quiz";
import { QuizBoxStyled } from "./style";
import { ComponentPropsWithoutRef } from "react";

export type InferArray<T extends any[]> = T extends (infer U)[]
  ? NonNullable<U>
  : never;

const isNotEmpty = <TValue>(
  value: TValue | null | undefined
): value is TValue => {
  return value !== null && value !== undefined;
};

export interface QuizBoxProps
  extends ComponentPropsWithoutRef<typeof QuizBoxStyled> {}

export interface QuizBoxProps {
  data: Quiz[];
}

export type QuizProblem = Pick<Quiz, "correct_answer" | "incorrect_answers">;
