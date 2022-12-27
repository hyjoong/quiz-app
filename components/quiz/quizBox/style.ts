import { styled } from "@lib/stitches.config";

export const QuizBoxStyled = styled("div", {
  border: "2px solid $green",

  ".quiz-header": {
    display: "flex",
    alignItems: "center",
    height: "200px",
    backgroundColor: "$green",

    "&:not(:last-child) >p": {
      width: "100%",
      padding: "0 10px",
      margin: "0 40px",
      backgroundColor: "$white",
      borderRadius: "10px",
      display: "flex",
      height: "90px",
      alignItems: "center",
      fontSize: "22px",
    },
  },
});

export const QuizList = styled("ul", {
  padding: "40px",
});

export const ButtonWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "300px",
  margin: "50px auto",
});
