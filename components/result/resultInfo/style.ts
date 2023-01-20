import { styled } from "@lib/stitches.config";

export const ResultInfoStyled = styled("div", {
  width: "100%",
  height: "calc(100vh - 2px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const InfoBox = styled("div", {
  width: "200px",
  height: "100px",
  border: "1px solid $green",
  padding: "60px",

  p: {
    fontSize: "20px",
    fontWeight: "600",
  },
  button: {
    marginTop: "20px",
  },
});
