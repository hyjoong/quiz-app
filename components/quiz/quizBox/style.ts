import { styled, keyframes } from "@lib/stitches.config";

const fadeIn = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(-10px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const QuizBoxStyled = styled("div", {
  width: "100%",
  maxWidth: "800px",
  margin: "0 auto",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.05)",
  padding: "16px 0",

  "@md": {
    boxShadow: "none",
    padding: "10px 0",
  },

  ".quiz-header": {
    flexShrink: 0,
    display: "flex",
    justifyContent: "space-between",
    padding: "0 40px",
    flexWrap: "wrap",
    gap: "8px",
    borderBottom: "1px solid #eee",
    paddingBottom: "16px",

    "@md": {
      padding: "0 20px",
      fontSize: "14px",
      paddingBottom: "12px",
    },

    ".timer": {
      width: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "@md": {
        width: "auto",
      },
    },
  },

  ".quiz-question": {
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    minHeight: "200px",
    backgroundColor: "$green",

    "@md": {
      minHeight: "160px",
    },

    "&:not(:last-child) >p": {
      width: "100%",
      padding: "16px",
      margin: "0 40px",
      backgroundColor: "$white",
      borderRadius: "10px",
      display: "flex",
      minHeight: "100px",
      alignItems: "center",
      fontSize: "20px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",

      "@md": {
        margin: "0 20px",
        fontSize: "16px",
        padding: "12px",
        minHeight: "80px",
      },
    },
  },
});

export const AnswerCount = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@md": {
    fontSize: "14px",
  },

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
  padding: "30px 40px",

  "@md": {
    padding: "16px 20px",
  },
});

export const QuizActionArea = styled("div", {
  width: "100%",
  backgroundColor: "white",
  padding: "20px 0",

  ".inner": {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 20px",
  },
});

export const AnswerResult = styled("div", {
  height: "30px",
  textAlign: "center",
  fontSize: "22px",
  fontWeight: "600",
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  span: {
    opacity: 0,
    animation: `${fadeIn} 0.3s ease forwards`,
  },

  "@md": {
    height: "24px",
    fontSize: "18px",
    marginBottom: "16px",
  },

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

export const ButtonWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
  maxWidth: "500px",
  margin: "0 auto",

  "@md": {
    gridTemplateColumns: "1fr",
    gap: "8px",
  },

  button: {
    width: "100%",
    height: "50px",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "8px",

    "@md": {
      height: "46px",
    },
  },
});
