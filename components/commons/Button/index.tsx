import React from "react";
import { ButtonStyled } from "./style";
import { ButtonProps } from "./type";

const Button = ({ children }: ButtonProps) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
