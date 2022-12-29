import { instance } from "..";
import { Quiz } from "./type";

export const getQuiz = async ({ category, difficulty }: Quiz) => {
  return await instance.get(
    `?amount=10${category === "all" ? "" : `&category=${category}`}${
      difficulty == "all" ? "" : `&difficulty=${difficulty}`
    }&type=multiple`
  );
};
