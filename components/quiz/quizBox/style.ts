import { styled } from "@lib/stitches.config";

export const QuizBoxStyled = styled("div", {
  width: "800px",
  margin: "0 auto",
  border: "2px solid $green",

  ".quiz-header": {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 40px",

    ".timer": {
      width: "70px",
      display: "flex",
      alignItems: "center",
    },
  },

  ".quiz-question": {
    display: "flex",
    alignItems: "center",
    height: "300px",
    backgroundColor: "$green",

    "&:not(:last-child) >p": {
      width: "100%",
      padding: "0 10px",
      margin: "0 40px",
      backgroundColor: "$white",
      borderRadius: "10px",
      display: "flex",
      height: "130px",
      alignItems: "center",
      fontSize: "24px",
    },
  },
});

export const AnswerCount = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  variants: {
    isCorrect: {
      true: {
        color: "$green",
      },
      false: {
        color: "$red",
      },
    },
  },
});

export const QuizList = styled("ul", {
  padding: "40px",
});

export const ButtonWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "bottom",
  maxWidth: "300px",
  margin: "50px auto",
});

export const AnswerResult = styled("div", {
  display: "flex",
  justifyContent: "center",
  height: "20px",
  fontSize: "22px",
  fontWeight: "600",

  variants: {
    isAnswered: {
      true: {
        color: "$green",
      },
      false: {
        color: "$red",
      },
    },
  },
});
