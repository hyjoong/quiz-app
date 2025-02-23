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
  alignItems: "center",
  minHeight: "400px",
  margin: "60px 0",
  gap: "20px",

  ".info": {
    flex: 1,
    h1: {
      display: "flex",
      justifyContent: "center",
      padding: "0 20px",
      textAlign: "center",
      fontSize: "26px",
      wordBreak: "keep-all",
      lineHeight: "1.5",
      marginTop: "10px",
      fontWeight: 600,

      "@md": {
        fontSize: "20px",
        padding: "0 10px",
      },
    },
  },

  "@md": {
    flexDirection: "column",
    margin: "40px 0",
    minHeight: "300px",
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
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",

    "@md": {
      width: "280px",
      height: "260px",
    },
  },

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
