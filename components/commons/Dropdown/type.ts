import { DropdownnStyled } from "./style";
import { ComponentPropsWithoutRef, Dispatch } from "react";
import { OptionProps } from "@type/option";

export interface DropdownProps
  extends ComponentPropsWithoutRef<typeof DropdownnStyled> {
  selectList: OptionProps[];
  selectedItem: OptionProps;
  setSelectOption: Dispatch<React.SetStateAction<OptionProps>>;
}
