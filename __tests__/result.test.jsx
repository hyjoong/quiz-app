import "@testing-library/jest-dom";
import Result from "@pages/result/index";
import { render } from "@testing-library/react";
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
    const { getByText, container } = render(<Result />);
    expect(container).toHaveTextContent("정답 : 3");
    expect(container).toHaveTextContent("오답 : 7");
    expect(container).toHaveTextContent("걸린 시간: 32.12초");

    const homeButton = getByText("홈으로");
    expect(homeButton).toBeInTheDocument();
  });
});
