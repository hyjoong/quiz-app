import "@testing-library/jest-dom";
import Quiz from "../pages/quiz/index";

import { render } from "@testing-library/react";

const QUIZ_LIZT = [
  {
    category: "Music",
    correct_answer: "88",
    difficulty: "medium",
    incorrect_answers: ["보기1", "보기2", "보기3"],
    question: "퀴즈 제목",
    type: "multiple",
  },
];

describe("<Quiz />", () => {
  it("render main page", () => {
    const { container } = render(<Quiz quizList={QUIZ_LIZT} />);

    expect(container).toHaveTextContent("퀴즈 제목");
    expect(container).toHaveTextContent("보기1");
    expect(container).toHaveTextContent("난이도 : medium");
  });
});
