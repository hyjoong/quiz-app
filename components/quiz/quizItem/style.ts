import { keyframes, styled } from "@lib/stitches.config";

const trembling = keyframes({
  from: { transform: "rotate(0.3deg)" },
  to: { transform: "rotate(-0.3deg)" },
});

export const QuizItemStyled = styled("li", {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "50px",
  padding: "0 15px",
  border: "2px solid #D1D5DB",
  borderRadius: "5px",
  cursor: "pointer",
  userSelect: "none",
  transition: "border-color 0.2s ease, background-color 0.2s ease",
  backgroundColor: "white",
  boxSizing: "border-box",
  margin: "0 0 20px 0",

  "@md": {
    height: "44px",
    padding: "0 12px",
    fontSize: "14px",
    margin: "0 0 15px 0",
  },

  "&:last-child": {
    marginBottom: 0,
  },

  ".quizContent": {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    flex: 1,
    overflow: "hidden",

    p: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },

    "@md": {
      fontSize: "14px",
    },
  },

  ".index": {
    marginRight: "5px",
    flexShrink: 0,
  },

  "&:hover": {
    borderColor: "#BBBBBB",
  },

  variants: {
    isSelected: {
      true: {
        borderColor: "#BBBBBB",
      },
    },

    isAnswered: {
      true: {
        borderColor: "$green",
        backgroundColor: "rgba(0, 255, 0, 0.05)",
        cursor: "default",

        "&:hover": {
          borderColor: "$green",
        },
      },
      false: {
        borderColor: "$red",
        backgroundColor: "rgba(255, 0, 0, 0.05)",
        cursor: "default",
        animation: `${trembling} 0.1s 3 ease`,

        "&:hover": {
          borderColor: "$red",
        },
      },
      undefined: {
        "&:hover": {
          borderColor: "#BBBBBB",
        },
      },
    },
  },

  compoundVariants: [
    {
      isAnswered: undefined,
      isSelected: true,
      css: {
        borderColor: "#BBBBBB",
      },
    },
  ],
});
