import { styled } from "@lib/stitches.config";

export const QuizBoxStyled = styled("div", {
  border: "2px solid $green",

  ".quiz-header": {
    display: "flex",
    justifyContent: "space-between",
  },

  ".quiz-question": {
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
