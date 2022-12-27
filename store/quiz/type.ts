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
  setQuizList: (quizList: QuizItem[]) => void;
}
