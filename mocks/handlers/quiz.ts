import { rest } from "msw";

const QUIZ_LIZT = [
  {
    category: "Music",
    correct_answer: "88",
    difficulty: "medium",
    incorrect_answers: ["보기1", "보기2", "보기3"],
    question: "퀴즈 제목",
    type: "multiple",
  },
  {
    category: "Music",
    correct_answer: "22",
    difficulty: "medium",
    incorrect_answers: ["보기1", "보기2", "보기3"],
    question: "퀴즈 제목2",
    type: "multiple",
  },
];

export const getQuiz = rest.get("/quiz", (req, res, ctx) =>
  res(ctx.json(QUIZ_LIZT))
);
