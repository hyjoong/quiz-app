import { styled } from "@lib/stitches.config";

export const ArrowBottomStyled = styled("svg", {
  transition: "transform 0.3s",
  variants: {
    rotate: {
      true: {
        transform: "rotate(-180deg)",
      },
    },
  },
});
