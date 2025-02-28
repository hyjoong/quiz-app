import { styled } from "@lib/stitches.config";

export const StyledMain = styled("div", {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  paddingBottom: "100px",
  boxSizing: "border-box",

  ">p": {
    fontSize: "28px",
    fontWeight: "600",
    textAlign: "center",
    margin: "50px 0",

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
    zIndex: 1,

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
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    maxWidth: "700px",
    margin: "0 auto",
    flex: 1,

    "@md": {
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
  },

  ".start-button-container": {
    display: "flex",
    justifyContent: "center",
    marginBottom: "100px",
    width: "100%",
    boxSizing: "border-box",

    "@md": {
      marginBottom: "80px",
    },

    button: {
      maxWidth: "400px",
      width: "100%",
      height: "56px",
      fontSize: "18px",

      "@md": {
        maxWidth: "none",
        height: "50px",
        fontSize: "16px",
      },
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

  "@md": {
    width: "100%",
    minWidth: "auto",
    boxSizing: "border-box",
  },

  h3: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "14px",
    textAlign: "center",

    "@md": {
      fontSize: "20px",
      marginBottom: "10px",
      width: "100%",
    },
  },
});
