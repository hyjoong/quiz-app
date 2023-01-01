import { rest } from "msw";
import { QUIZ_LIZT } from "@mocks/quiz";

export const getQuiz = rest.get("/quiz", (req, res, ctx) =>
  res(ctx.json(QUIZ_LIZT))
);
