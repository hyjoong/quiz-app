### Skills

- Next.Js
- Stitches CSS
- Zustand

### Requirements

- [x] 사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
- [x] 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.
- [x] 사용자는 답안을 선택하면 다음 문항을 볼 수 있다.
  - [x] 답안 선택 후 다음 문항 버튼을 볼 수 있다.
  - [x] 답안이 맞았는지 틀렸는지 바로 알 수 있다.
  - [x] 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
- [x] 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
  - [x] 퀴즈를 마칠 때까지 소요된 시간
  - [x] 정답 개수
  - [x] 오답 수
  - [ ] 정 오답에 대한 비율을 차트로 표기
- [ ] 오답 노트 기능

#### 1. 사용자는 메인 페이지에서 카테고리, 난이도, 문제 수를 설정하고 퀴즈 풀기 버튼을 클릭해서 생성하고 quiz 페이지로 이동된다.

#### 2. 사용자는 퀴즈 페이지에서 퀴즈를 풀 수 있고 문제에 대한 보기는 4개가와 정답확인 버튼과 다음 문제 버튼이 나타난다.

- 4개의 보기중에서 하나를 클릭해야 `정답 확인`버튼이 활상화 되고 버튼을 클릭해서 정답 여부를 확인할 수 있다
  - 정답일 시 `정답입니다` 메세지가 나타남
  - 오답일 시 `오답입니다` 메세지가 나타남
  - `정답 확인`버튼이 `다시 풀기`버튼으로 변경되고 `다음 문제`버튼이 활성화된다

#### 3. 사용자는 모든 퀴즈문제를 다 풀면 결과 페이지에서 결과 정보를 볼 수 있다.

- 정답 수
- 오답 수
- 문제를 푸는데 걸린 시간 (초)

### Unit Test

#### 1. [main.test.jsx](https://github.com/hyjoong/quiz-app/blob/master/__tests__/main.test.jsx)

- 퀴즈 타이틀, 버튼, 드롭다운이 보여진다.
- 드롭다운을 클릭하면 드롭다운 리스트들이 보여진다

```javascript
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
```

#### 2. [quiz.test.jsx](https://github.com/hyjoong/quiz-app/blob/master/__tests__/quiz.test.jsx)

- 퀴즈 난이도, 버튼, 보기가 보여진다.

```javascript
it("퀴즈 문항에 대한 보기는 4개가 보여진다.", async () => {
  render(<Quiz />);
  await waitFor(() => {
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });
});
```

- 보기를 클릭하면 버튼이 활성화 되고 정답 여부를 확인할 수 있다.

```javascript
const checkButton = screen.getByText("정답 확인");
const nextButton = screen.getByText("다음 문제");

expect(screen.queryByText("다시 풀기")).not.toBeInTheDocument();
expect(checkButton).toBeDisabled();
expect(nextButton).toBeDisabled();

const correctItem = screen.getByText("보기1");
fireEvent.click(correctItem);
expect(checkButton).toBeEnabled();

// 정답 확인 버튼을 클릭하면 정답 여부를 확인하고 정답 확인 -> 다시 풀기 버튼으로 바뀐다
fireEvent.click(checkButton);
expect(screen.getByText("정답입니다")).toBeInTheDocument();
expect(screen.queryByText("정답 확인")).not.toBeInTheDocument();
expect(screen.getByText("다시 풀기")).toBeInTheDocument();
```

#### 3. [result.test.jsx](https://github.com/hyjoong/quiz-app/blob/master/__tests__/result.test.jsx)

- 퀴즈 결과를 확인할 수 있다.
