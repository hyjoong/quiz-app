## 프로젝트 개요

이 프로젝트는 퀴즈 오픈 API를 활용하여 개발한 애플리케이션입니다. 사용자는 랜딩 페이지에서 언어 선택, 카테고리 설정, 난이도 선택 및 문제 수 설정을 통해 퀴즈를 진행할 수 있습니다.

## [배포 링크](https://quizs-app.vercel.app)

## 주요 기능

### 1. 랜딩 페이지

- 사용자는 랜딩 페이지에서 상단의 `en` 또는 `ko` 버튼을 클릭하여 언어를 선택할 수 있다
- 사용자는 카테고리, 난이도 및 문제 수를 설정한 후 "퀴즈 풀기" 버튼을 클릭하여 퀴즈 페이지로 이동할 수 있다.

  <img width="700" alt="main" src="https://user-images.githubusercontent.com/70426440/213899213-acced543-c77d-41a3-a8b8-bc8d7a3cc00b.png">
  <img width="700" alt="ko-landing" src="https://user-images.githubusercontent.com/70426440/213899408-d229574e-5df9-44af-8f1d-851bd6fb1970.png">
  <img width="700" alt="en-landing" src="https://user-images.githubusercontent.com/70426440/213899410-eb0cb82d-ac52-40d7-9957-58f55223c49c.png">

### 2. 퀴즈 페이지

- 퀴즈 페이지에서 사용자는 문항에 대한 답안을 4개의 보기 중에서 선택할 수 있다.
- "정답 확인" 버튼을 누르면 정답 여부를 확인할 수 있다.
- 정답 여부를 확인한 후, 사용자는 "다시 풀기" 버튼을 통해 같은 문제를 다시 풀거나, "다음 문제" 버튼을 클릭하여 다음 문항으로 이동할 수 있다.

  <img width="700" alt="quiz" src="https://user-images.githubusercontent.com/70426440/213844877-e7edfd3d-0139-43c7-90ec-aeedae1a6183.png">

### 3. 퀴즈 결과페이지

- 모든 문제를 풀면 "결과 보기" 버튼을 클릭하여 결과 페이지로 이동할 수 있다.
- 결과 페이지에서는 다음 정보를 확인할 수 있다.

  - 퀴즈를 완료하는 데 걸린 시간
  - 정답 개수
  - 오답 개수
  - 파이 차트를 통한 정오답 비율 표시

    <img width="700" alt="result" src="https://user-images.githubusercontent.com/70426440/262737365-6521ebe1-d87d-40fb-a9b0-6bd1d892585a.png">

## 이슈 해결과 오픈소스 기여 내역

### 1. next js에서 i18n 적용 문제와 관련된 Next.js Discussion에 댓글 남김

- 이슈: next js에서 i18n 라이브러리를 사용하려고 시도했는데 "Text content does not match server-rendered HTML" 오류가 발생했습니다.

- 내용: 이 문제에 대한 해결 방법을 찾기 위해 Next.js Discussion에 댓글을 남겼습니다. 동일한 문제를 겪고 있는 다른 개발자들에게 도움을 제공하고 해결 방법을 공유하였습니다.

- https://github.com/vercel/next.js/discussions/41319#discussioncomment-4754810

### 2. nivo Pie Chart 오픈소스 기여

- 내용: nivo 라이브러리에서 Pie Chart의 gradients 속성을 적용하기 위해 오픈소스를 분석하던 중, 해당 라이브러리에 test 코드가 작성되지 않은 것을 발견하였습니다. 이를 개선하기 위해 nivo 라이브러리 GitHub에 pull request를 제출하여 test 코드를 작성하고 라이브러리에 기여하였습니다.

- https://github.com/plouc/nivo/pull/2338

## Unit Test

1. [main.test.jsx](https://github.com/hyjoong/quiz-app/blob/master/__tests__/main.test.jsx)
2. [quiz.test.jsx](https://github.com/hyjoong/quiz-app/blob/master/__tests__/quiz.test.jsx)
3. [result.test.jsx](https://github.com/hyjoong/quiz-app/blob/master/__tests__/result.test.jsx)

## 🛠 기술스택

- Next.Js
- Stitches CSS
- Zustand
- nivo
- i18n
