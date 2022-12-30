import "@testing-library/jest-dom";
import Quiz from "@pages/quiz/index";
import { render, fireEvent } from "@testing-library/react";
import { QUIZ_LIZT } from "@mocks/quiz";
import { useStore } from "@store/index";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
    };
  },
}));

const { quizStore } = useStore();

beforeEach(() => {
  quizStore.setQuizList(QUIZ_LIZT);
});

describe("quiz page render test", () => {
  it("a quiz question is displayed ", async () => {
    const { getByText, container } = render(<Quiz />);
    expect(container).toHaveTextContent("난이도: easy");

    expect(container).toHaveTextContent("정답:");
    expect(container).toHaveTextContent("오답:");

    const checkButton = getByText("정답 확인");
    expect(checkButton).toBeInTheDocument();

    const nextButton = getByText("다음 문제");
    expect(nextButton).toBeInTheDocument();
  });

  it("퀴즈 문항에 대한 보기는 4개가 보여진다.", () => {
    const { container } = render(<Quiz />);
    expect(container.getElementsByClassName("quizContent").length).toBe(4);
  });

  it("보기를 클릭하고 '정답 확인'버튼을 클릭해서 정답 여부를 확인할 수 있다.", async () => {
    const { container, getByText } = render(<Quiz />);
    const checkButton = getByText("정답 확인");
    const nextButton = getByText("다음 문제");
    expect(checkButton).toBeDisabled();
    expect(nextButton).toBeDisabled();

    // 보기를 클릭하면 '정답확인', '다음문제' 버튼이 활성화 된다
    const correctItem = getByText("보기1");
    fireEvent.click(correctItem);

    // <button>정답 확인</button> 활성화
    expect(checkButton).not.toBeDisabled();

    // 정답인 보기를 클릭한 상태에서 정답 확인 버튼을 클릭하면 '정답입니다' 메세지를 확인할 수 있다
    fireEvent.click(checkButton);
    expect(container).toHaveTextContent("정답입니다");

    // <button>다음 문제</button> 활성화
    expect(nextButton).not.toBeDisabled();

    fireEvent.click(checkButton);

    // 오답인 보기를 클릭한 상태에서 정답 확인 버튼을 클릭하면 '오답입니다' 메세지를 확인할 수 있다
    const inCorrectItem = getByText("보기2");
    fireEvent.click(inCorrectItem);
    fireEvent.click(checkButton);
    expect(container).toHaveTextContent("오답입니다");
  });
});

afterEach(() => {
  quizStore.setQuizList([]);
});
