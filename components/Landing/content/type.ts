import { ComponentPropsWithoutRef } from "react";
import { ContentStyled } from "./style";

export interface Props extends ComponentPropsWithoutRef<typeof ContentStyled> {
  imgSrc: string;
  detail: string;
  isRevert?: boolean;
}
