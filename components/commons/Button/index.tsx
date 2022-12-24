import React from "react";
import { ButtonStyled } from "./style";
import { ButtonProps } from "./type";

const Button = ({ isDisabled = false, children, ...props }: ButtonProps) => {
  return (
    <ButtonStyled isDisabled={isDisabled} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
