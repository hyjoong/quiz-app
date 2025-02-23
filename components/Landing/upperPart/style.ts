import { styled } from "@lib/stitches.config";

export const StyledMain = styled("div", {
  minHeight: "calc(100vh - 4px)",
  width: "100%",
  padding: "20px",
  boxSizing: "border-box",

  ">p": {
    display: "flex",
    justifyContent: "center",
    fontSize: "28px",
    fontWeight: "600",
    margin: "50px 0",
    textAlign: "center",

    "@md": {
      fontSize: "24px",
      margin: "30px 0",
    },
  },

  ".button-box": {
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
    gap: "8px",

    a: {
      textDecoration: "none",
      display: "flex",
    },

    "@md": {
      position: "relative",
      top: "auto",
      right: "auto",
      justifyContent: "center",
      marginBottom: "20px",
    },

    ".btn-lang": {
      width: "36px",
      height: "36px",
      padding: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      fontSize: "14px",
      textTransform: "uppercase",

      "@md": {
        width: "32px",
        height: "32px",
      },
    },
  },

  ".option-list": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    maxWidth: "700px",
    margin: "0 auto",
    padding: "20px",

    "@md": {
      flexDirection: "column",
      alignItems: "center",
      height: "auto",
    },
  },
});

export const SelectOption = styled("div", {
  flex: "1",
  minWidth: "150px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "20px",

  h3: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "14px",
    textAlign: "center",

    "@md": {
      fontSize: "20px",
      marginBottom: "10px",
    },
  },
});
