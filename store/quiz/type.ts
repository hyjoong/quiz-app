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
  setQuizList: (quizList: QuizItem[]) => void;
  setCorrectNumber: (count: number) => void;
  setInCorrectNumber: (count: number) => void;
  setTimer: (time: string) => void;
}
