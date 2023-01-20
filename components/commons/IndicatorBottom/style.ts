import { styled, keyframes } from "@lib/stitches.config";

export const StyledScrollDownIndicator = styled("div", {
  position: "absolute",
  bottom: 0,
  left: "50%",
  width: "40px",
  height: "40px",
  transform: " translateY(-80px) translateX(-50%) rotate(45deg)",
});

export const animate = keyframes({
  "0%": {
    top: "-5px",
    left: "-5px",
    opacity: 0,
  },
  " 25%": {
    top: 0,
    left: 0,
    opacity: 1,
  },
  "50%, 100%": {
    top: "5px",
    left: "5px",
    opacity: 0,
  },
});

export const DownIndicator = styled("div", {
  position: "absolute",
  top: "0",
  left: "0",
  display: "block",
  width: "100%",
  height: "100%",
  borderBottom: "2px solid grey",
  borderRight: "2px solid grey",
  animation: `${animate} 1.5s linear infinite`,
  opacity: 0,

  "&:nth-child(1)": {
    transform: "translate(-15px, -15px)",
    animationDelay: "-0.4s",
  },
  "&:nth-child(2)": {
    transform: "translate(0, 0)",
    animationDelay: "-0.2s",
  },
  "&:nth-child(3)": {
    transform: "translate(15px, 15px)",
    animationDelay: "0s",
  },
});
