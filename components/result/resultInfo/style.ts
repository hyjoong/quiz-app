import { styled } from "@lib/stitches.config";

export const ResultInfoStyled = styled("div", {
  width: "100%",
  maxWidth: "800px",
  minHeight: "calc(100vh - 64px)",
  margin: "0 auto",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "40px",
  boxSizing: "border-box",

  "@md": {
    flexDirection: "column",
    gap: "20px",
    padding: "20px 16px",
    width: "100%",
  },

  ".chart-container": {
    width: "400px",
    height: "400px",

    "@md": {
      width: "100%",
      maxWidth: "350px",
      height: "300px",
      margin: "0 auto",
    },
  },
});

export const InfoBox = styled("div", {
  minWidth: "250px",
  padding: "30px",
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",

  "@md": {
    width: "100%",
    minWidth: "auto",
    padding: "20px",
  },

  p: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
    display: "flex",
    justifyContent: "space-between",

    "@md": {
      fontSize: "18px",
    },

    "&:last-of-type": {
      marginBottom: "24px",
    },

    span: {
      fontWeight: "500",
    },
  },

  button: {
    width: "100%",
    marginTop: "20px",
  },
});
