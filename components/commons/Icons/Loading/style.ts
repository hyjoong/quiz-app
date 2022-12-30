import { keyframes, styled } from "@lib/stitches.config";

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const LoadingStyled = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const SpinnerSvg = styled("svg", {
  width: "67px",
  height: "20px",
  fill: "gray",
  color: "transparent",
  animation: `${spin} 1s linear infinite`,
});
