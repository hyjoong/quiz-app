import "@testing-library/jest-dom";
import Home from "@pages/index";
import { render, fireEvent, screen } from "@testing-library/react";
import { QUIZ_CATEGORY, QUIZ_DIFFICULTY, QUIZ_NUMBER } from "@constants/select";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
    };
  },
}));

describe("<Home />", () => {
  render(<Home />);
  const title = screen.getByText("Quiz Game");
  const categorySelector = screen.getByText("카테고리");
  const difficultySelector = screen.getByText("난이도");
  const countSelector = screen.getByText("문제수");
  const quizButton = screen.getByRole("button");

  it("main page render test", () => {
    expect(title).toBeInTheDocument();
    expect(categorySelector).toBeInTheDocument();
    expect(difficultySelector).toBeInTheDocument();
    expect(quizButton).toBeInTheDocument();
  });

  it("selector click render test", () => {
    render(<Home />);

    // 카테고리 드롭다운 클릭
    fireEvent.click(categorySelector);
    QUIZ_CATEGORY.forEach((item) => {
      expect(screen.getAllByText(item.content));
    });

    // 난이도 드롭다운 클릭
    fireEvent.click(difficultySelector);
    QUIZ_DIFFICULTY.forEach((item) => {
      expect(screen.getAllByText(item.content));
    });

    // 문제수 드롭다운 클릭
    fireEvent.click(countSelector);
    QUIZ_NUMBER.forEach((item) => {
      expect(screen.getAllByText(item.content));
    });
  });
});
