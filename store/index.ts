import { settingStore } from "./setting/index";

export const useStore = () => ({
  settingStore: settingStore().getState(),
});
