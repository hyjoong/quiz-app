import "@testing-library/jest-dom";
import Result from "@pages/result/index";
import { render, screen } from "@testing-library/react";
import { useStore } from "@store/index";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/result",
    };
  },
}));

const { quizStore } = useStore();

beforeEach(() => {
  quizStore.setCorrectNumber(3);
  quizStore.setInCorrectNumber(7);
  quizStore.setTimer("32.12");
});

describe("result page render test", () => {
  it("result render", () => {
    render(<Result />);
    expect(screen.getByText("정답 : 3"));
    expect(screen.getByText("오답 : 7"));
    expect(screen.getByText("걸린 시간: 32.12초"));

    const homeButton = screen.getByRole("button", { name: /홈으로/i });
    expect(homeButton).toBeInTheDocument();
  });
});

afterEach(() => {
  quizStore.setQuizList([]);
});
