import create from "zustand";
import { persist } from "zustand/middleware";
import { Quiz, QuizItem } from "./type";

const initialState = {
  quizList: [],
  correctCount: 0,
  inCorrectCount: 0,
  quizNumber: 0,
  timer: "0",
};

export const quizStore = () =>
  create<Quiz>()(
    persist(
      (set) => ({
        ...initialState,
        setQuizList: (quizList: QuizItem[]) => {
          set(() => ({ quizList: quizList }));
        },
        setCorrectNumber: (count: number) => {
          set(() => ({ correctCount: count }));
        },
        setInCorrectNumber: (count: number) => {
          set(() => ({ inCorrectCount: count }));
        },
        setTimer: (time: string) => {
          set(() => ({ timer: time }));
        },
        setQuizNumber: (count: number) => {
          set(() => ({ quizNumber: count }));
        },
      }),
      {
        name: "quiz",
        getStorage: () => sessionStorage,
      }
    )
  );
