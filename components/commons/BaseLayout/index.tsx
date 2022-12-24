import React from "react";
import { BaseLayoutStyled } from "./style";
import { BaseLayoutProps } from "./type";

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return <BaseLayoutStyled>{children}</BaseLayoutStyled>;
};

export default BaseLayout;
