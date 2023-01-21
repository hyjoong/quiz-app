import { styled } from "@lib/stitches.config";

export const ResultInfoStyled = styled("div", {
  width: "100%",
  height: "calc(100vh - 64px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const InfoBox = styled("div", {
  width: "250px",
  height: "100px",
  padding: "30px",

  p: {
    fontSize: "20px",
    fontWeight: "600",
  },
  button: {
    marginTop: "20px",
  },
});
