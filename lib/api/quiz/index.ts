import { instance } from "..";
import { Quiz } from "./type";

export const getQuiz = async ({ category, difficulty, number }: Quiz) => {
  return await instance.get(
    `?amount=${number}${category === "all" ? "" : `&category=${category}`}${
      difficulty == "all" ? "" : `&difficulty=${difficulty}`
    }&type=multiple`
  );
};
