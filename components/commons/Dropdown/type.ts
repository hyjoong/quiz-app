import { DropdownnStyled } from "./style";
import { ComponentPropsWithoutRef, Dispatch } from "react";

export interface OptionProps
  extends ComponentPropsWithoutRef<typeof DropdownnStyled> {
  title: string;
  content: string;
  value: string | number | null;
}

export interface DropdownProps {
  selectList: OptionProps[];
  selectedItem: OptionProps;
  setSelectOption: Dispatch<React.SetStateAction<OptionProps>>;
}
