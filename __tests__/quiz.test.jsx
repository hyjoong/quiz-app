import "@testing-library/jest-dom";
import Quiz from "@pages/quiz/index";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
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
    render(<Quiz />);

    expect(screen.getByText("난이도: easy"));
    expect(screen.findByText("정답:"));
    expect(screen.findByText("오답:"));

    const checkButton = screen.getByText("정답 확인");
    //getByText("정답 확인");
    expect(checkButton).toBeInTheDocument();

    const nextButton = screen.getByText("다음 문제");
    expect(nextButton).toBeInTheDocument();
  });

  it("퀴즈 문항에 대한 보기는 4개가 보여진다.", async () => {
    render(<Quiz />);
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(4);
    });
  });

  it("보기를 클릭하고 '정답 확인'버튼을 클릭해서 정답 여부를 확인할 수 있다.", async () => {
    render(<Quiz />);
    const checkButton = screen.getByText("정답 확인");
    const nextButton = screen.getByText("다음 문제");
    expect(checkButton).toBeDisabled();
    expect(nextButton).toBeDisabled();

    expect(screen.queryByText("다시 풀기")).not.toBeInTheDocument();

    // 보기를 클릭하면 '정답확인', '다음문제' 버튼이 활성화 된다
    const correctItem = screen.getByText("보기1");
    fireEvent.click(correctItem);

    // <button>정답 확인</button> 활성화
    expect(checkButton).toBeEnabled();

    // 정답인 보기를 클릭한 상태에서 정답 확인 버튼을 클릭하면 '정답입니다' 메세지를 확인할 수 있다
    fireEvent.click(checkButton);
    expect(screen.getByText("정답입니다"));

    // <button>다음 문제</button> 활성화
    expect(nextButton).toBeEnabled();

    fireEvent.click(checkButton);

    // 오답인 보기를 클릭한 상태에서 정답 확인 버튼을 클릭하면 '오답입니다' 메세지를 확인할 수 있다
    const inCorrectItem = screen.getByText("보기2");
    fireEvent.click(inCorrectItem);
    fireEvent.click(checkButton);
    expect(screen.getByText("오답입니다")).toBeInTheDocument();
    expect(screen.queryByText("정답 확인")).not.toBeInTheDocument();
    expect(screen.getByText("다시 풀기")).toBeInTheDocument();
  });
});

afterEach(() => {
  quizStore.setQuizList([]);
});
