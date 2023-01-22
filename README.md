## [배포 주소](https://quizs-app.vercel.app)

### Skills

- Next.Js
- Stitches CSS
- Zustand
- nivo/pie
- i18n

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
  - [x] 정 오답에 대한 비율을 차트로 표기
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

```javascript
// 카테고리 드롭다운 클릭
fireEvent.click(categorySelector);
QUIZ_CATEGORY.forEach((item) => {
  expect(screen.getAllByText(item.content));
});
...
```

#### 2. [quiz.test.jsx](https://github.com/hyjoong/quiz-app/blob/master/__tests__/quiz.test.jsx)

```javascript
it("퀴즈 문항에 대한 보기는 4개가 보여진다.", async () => {...});
it("문제 보기를 클릭하면 '정답 확인'버튼이 활성화 된다.", () => {...});
it("정답을 맞출 경우 정답 메세지를 확인할 수 있다.", () => {...});
it("정답을 틀릴 경우 오답 메세지를 확인할 수 있다.", () => {...});
it("정답을 확인할 경우 다시 풀기 버튼과 다음문제 버튼이 활성화 된다", () => {....});
```

#### 3. [result.test.jsx](https://github.com/hyjoong/quiz-app/blob/master/__tests__/result.test.jsx)

### 1. 메인 페이지

사용자는 우측에 en, ko 버튼을 클릭해서 언어를 선택할 수 있습니다

<img width="800" alt="main" src="https://user-images.githubusercontent.com/70426440/213899213-acced543-c77d-41a3-a8b8-bc8d7a3cc00b.png">
<img width="800" alt="ko-landing" src="https://user-images.githubusercontent.com/70426440/213899408-d229574e-5df9-44af-8f1d-851bd6fb1970.png">
<img width="800" alt="en-landing" src="https://user-images.githubusercontent.com/70426440/213899410-eb0cb82d-ac52-40d7-9957-58f55223c49c.png">

### 2. 퀴즈 페이지

<img width="800" alt="quiz" src="https://user-images.githubusercontent.com/70426440/213844877-e7edfd3d-0139-43c7-90ec-aeedae1a6183.png">

### 3. 결과 페이지

<img width="800" alt="result" src="https://user-images.githubusercontent.com/70426440/213844914-545986e7-d495-4d6a-81a1-574b7609589c.png">
