import create from "zustand";
import { persist } from "zustand/middleware";
import { OptionProps } from "@type/option";
import { Setting } from "./type";

const initialState = {
  category: 12,
  difficulty: "easy",
};

export const settingStore = () =>
  create<Setting>()(
    persist((set) => ({
      ...initialState,
      setCategory: (option: OptionProps["value"]) => {
        set(() => ({ category: option }));
      },
      setDifficulty: (option: OptionProps["value"]) => {
        set(() => ({ difficulty: option }));
      },
    }))
  );
