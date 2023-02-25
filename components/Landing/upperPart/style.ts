import { styled } from "@lib/stitches.config";

export const StyledMain = styled("div", {
  height: "calc(100vh - 4px)",
  width: "100%",

  ".button-box": {
    display: "flex",
    justifyContent: "flex-end",

    ".btn-lang": {
      padding: "10px",
      borderRadius: "50%",
      marginRight: "5px",
    },
  },

  ">p": {
    display: "flex",
    justifyContent: "center",
    fontSize: "28px",
    fontWeight: "600",
    margin: "50px 0",
  },

  ".option-list": {
    display: "flex",
    width: "700px",
    margin: "0 auto",
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
