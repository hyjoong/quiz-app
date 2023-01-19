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

    const checkButton = screen.getByRole("button", { name: /정답 확인/i });
    //getByText("정답 확인");
    expect(checkButton).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: /다음 문제/i });
    expect(nextButton).toBeInTheDocument();
  });

  it("퀴즈 문항에 대한 보기는 4개가 보여진다.", async () => {
    render(<Quiz />);
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(4);
    });
  });

  test("button should be rendered", () => {
    render(<Quiz />);

    const checkButton = screen.getByRole("button", { name: /정답 확인/i });
    expect(checkButton).toBeInTheDocument();
  });

  it("문제 보기를 클릭하면 '정답 확인'버튼이 활성화 된다.", () => {
    render(<Quiz />);

    const checkButton = screen.getByRole("button", { name: /정답 확인/i });
    const quizItem = screen.getByText("보기1");

    expect(checkButton).toBeDisabled();
    fireEvent.click(quizItem);
    expect(checkButton).toBeEnabled();
  });

  it("정답을 맞출 경우 정답 메세지를 확인할 수 있다.", () => {
    render(<Quiz />);

    const checkButton = screen.getByRole("button", { name: /정답 확인/i });
    const correctItem = screen.getByText("보기1");

    fireEvent.click(correctItem);
    fireEvent.click(checkButton);
    expect(screen.getByText("정답입니다"));
  });

  it("정답을 틀릴 경우 오답 메세지를 확인할 수 있다.", () => {
    render(<Quiz />);
    const checkButton = screen.getByRole("button", { name: /정답 확인/i });
    const inCorrectItem = screen.getByText("보기2");

    fireEvent.click(inCorrectItem);
    fireEvent.click(checkButton);
    expect(screen.getByText("오답입니다")).toBeInTheDocument();
  });

  it("정답을 확인할 경우 다시 풀기 버튼과 다음문제 버튼이 활성화 된다", () => {
    render(<Quiz />);
    const checkButton = screen.getByRole("button", { name: /정답 확인/i });
    const nextButton = screen.getByRole("button", { name: /다음 문제/i });

    expect(nextButton).toBeDisabled();
    expect(
      screen.queryByRole("button", { name: /다시 풀기/i })
    ).not.toBeInTheDocument();

    const quizItem = screen.getByText("보기1");
    fireEvent.click(quizItem);

    fireEvent.click(checkButton);

    expect(nextButton).toBeEnabled();
    expect(
      screen.getByRole("button", { name: /다시 풀기/i })
    ).toBeInTheDocument();
  });
});

afterEach(() => {
  quizStore.setQuizList([]);
});
