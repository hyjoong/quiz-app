import { styled } from "@lib/stitches.config";

export const ContentStyled = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  height: "500px",

  h1: {
    fontSize: "20px",
    fontWeight: 600,
    marginTop: "20px",
  },
});
