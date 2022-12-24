import React from "react";
import { ArrowBottomStyled } from "./style";
import { ArrowBottomProps } from "./type";

const ArrowBottom = ({ rotate = false }: ArrowBottomProps) => {
  return (
    <ArrowBottomStyled
      width="8"
      height="5"
      viewBox="0 0 12 8"
      fill="none"
      rotate={rotate}
    >
      <path
        d="M1.41 0.589966L6 5.16997L10.59 0.589966L12 1.99997L6 7.99997L0 1.99997L1.41 0.589966Z"
        fill="#3A474E"
      />
    </ArrowBottomStyled>
  );
};

export default ArrowBottom;
