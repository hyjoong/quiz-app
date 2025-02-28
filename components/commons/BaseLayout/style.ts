import { styled } from "@lib/stitches.config";

export const BaseLayoutStyled = styled("div", {
  maxWidth: "1200px",
  minHeight: "100vh",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  padding: "0 16px",
  boxSizing: "border-box",

  "@md": {
    padding: "0 16px",
  },
});
