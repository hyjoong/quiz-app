import { keyframes, styled } from "@lib/stitches.config";

const leftToRight = keyframes({
  from: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
  to: { opacity: 1, transform: " translateZ(0)" },
});

const rightToLeft = keyframes({
  from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
  to: { opacity: 1, transform: " translateZ(0)" },
});

export const ContentStyled = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  height: "500px",
  margin: "90px 0 ",

  ".info": {
    h1: {
      display: "flex",
      justifyContent: "center",
      padding: "0 70px",
      textAlign: "center",
      fontSize: "26px",
      wordBreak: "keep-all",
      lineHeight: "40px",
      marginTop: "10px",
      fontWeight: 600,
    },
  },

  variants: {
    isRevert: {
      true: {
        flexDirection: "row-reverse",
      },
    },
  },
});
export const ImageBox = styled("div", {
  variants: {
    isViewDirection: {
      left: {
        animation: `${rightToLeft} 1.5s`,
      },
      right: {
        animation: `${leftToRight} 1.5s`,
      },
      none: {},
    },
  },
});
