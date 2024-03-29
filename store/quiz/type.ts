export interface QuizItem {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  options: string[];
  type: string;
}

export interface Quiz {
  quizList: QuizItem[];
  correctCount: number;
  inCorrectCount: number;
  timer: string;
  quizNumber: number;
  setQuizList: (quizList: QuizItem[]) => void;
  setCorrectNumber: (count: number) => void;
  setInCorrectNumber: (count: number) => void;
  setTimer: (time: string) => void;
  setQuizNumber: (count: number) => void;
  setResetStore: () => void;
  hasTimeLimit: boolean;
  toggleTimeLimit: (hasTimeLimit: boolean) => void;
}
