import { rest } from "msw";
import { QUIZ_LIZT } from "@mocks/quiz";

export const getQuiz = rest.get("/api/quiz", (req, res, ctx) =>
  res(ctx.status(200), ctx.json(QUIZ_LIZT))
);
