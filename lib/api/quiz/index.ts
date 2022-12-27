import { instance } from "..";
import { Quiz } from "./type";

export const getQuiz = async ({ query }: Quiz) => {
  return await instance.get(`?amount=10${query}&type=multiple`);
};
