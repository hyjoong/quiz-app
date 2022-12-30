import { quizStore } from "./quiz";

export const useStore = () => ({
  quizStore: quizStore().getState(),
});
