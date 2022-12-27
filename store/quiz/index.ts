import create from "zustand";
import { persist } from "zustand/middleware";
import { Quiz, QuizItem } from "./type";

const initialState = {
  quizList: [],
};

export const quizStore = () =>
  create<Quiz>()(
    persist((set) => ({
      ...initialState,
      setQuizList: (quizList: QuizItem[]) => {
        set(() => ({ quizList: quizList }));
      },
    }))
  );
