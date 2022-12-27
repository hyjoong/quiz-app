import { quizStore } from "./quiz";
import { settingStore } from "./setting/index";

export const useStore = () => ({
  settingStore: settingStore().getState(),
  quizStore: quizStore().getState(),
});
