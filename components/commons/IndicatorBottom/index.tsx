import React from "react";
import { DownIndicator, StyledScrollDownIndicator } from "./style";

const ScrollDownIndicator = () => {
  return (
    <StyledScrollDownIndicator>
      <DownIndicator />
      <DownIndicator />
      <DownIndicator />
    </StyledScrollDownIndicator>
  );
};

export default ScrollDownIndicator;
