import { keyframes, styled } from "@lib/stitches.config";

const trembling = keyframes({
  from: { transform: "rotate(0.3deg)" },
  to: { transform: "rotate(-0.3deg)" },
});

export const QuizItemStyled = styled("li", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "21px",
  padding: "10px",
  border: "2px solid #D1D5DB",
  borderRadius: "5px",
  cursor: "pointer",
  userSelect: "none",

  ".quizContent": {
    display: "flex",
  },
  ".index": {
    marginRight: "5px",
  },

  "&:not(:last-child)": {
    marginBottom: "20px",
  },

  variants: {
    isSelected: {
      true: {
        border: "2px solid #BBBBBB",
      },
      false: {
        "&:hover": { boxShadow: "none" },
      },
    },

    isAnswered: {
      true: {
        border: "2px solid $green",
        cursor: "default",
      },
      false: {
        border: "2px solid $red",
        cursor: "default",
        animation: `${trembling} 0.1s 3 ease`,
      },
      undefined: {
        "&:hover": {
          boxShadow:
            "rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(61 59 53 / 16%) 0px 0px 0px 1px, rgb(61 59 53 / 8%) 0px 3px 9px 0px, rgb(61 59 53 / 8%) 0px 2px 5px 0px",
        },
      },
    },
  },
});
