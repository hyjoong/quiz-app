import { keyframes, styled } from "@lib/stitches.config";

const appearGradually = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
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

    isInViewport: {
      true: {
        animation: `${appearGradually} 1.5s`,
      },
    },
  },
});
