import { OptionProps } from "@type/option";

export interface Setting {
  category: OptionProps["value"];
  difficulty: OptionProps["value"];
  setCategory: (optionValue: OptionProps["value"]) => void;
  setDifficulty: (optionValue: OptionProps["value"]) => void;
}
