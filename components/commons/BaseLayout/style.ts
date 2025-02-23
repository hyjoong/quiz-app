import { styled } from "@lib/stitches.config";

export const BaseLayoutStyled = styled("div", {
  maxWidth: "1200px",
  height: "100vh",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  padding: "0 16px",

  "@md": {
    padding: "0 16px",
  },
});
