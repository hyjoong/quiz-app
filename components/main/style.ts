import { styled } from "@lib/stitches.config";

export const StyledMain = styled("div", {
  height: "calc(100vh - 4px)",

  border: "2px solid $green",
  width: "100%",
  h1: {
    display: "flex",
    justifyContent: "center",
    fontSize: "28px",
    fontWeight: "600",
    margin: "50px 0",
  },

  ".option-list": {
    display: "flex",
    height: "300px",
  },
});

export const SelectOption = styled("div", {
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  h3: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "14px",
  },
});
