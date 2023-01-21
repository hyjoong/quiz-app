import { styled } from "@lib/stitches.config";

export const ContentStyled = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  height: "500px",
  margin: "90px 0 ",

  ".info": {
    display: "flex",
    justifyContent: "center",

    h1: {
      marginTop: "10px",
      fontSize: "20px",
      fontWeight: 600,
      textAlign: "center",
      lineHeight: "24px",
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
