import { NextApiRequest, NextApiResponse } from "next";
import { instance } from "@lib/api";
import { Quiz } from "@lib/api/quiz/type";

export const getQuiz = async ({ category, difficulty }: Quiz) => {
  return await instance.get(
    `?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { category, difficulty } = req.body;

  try {
    const { data } = await getQuiz({ category, difficulty });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({
      status: "failed",
      message: "quiz data fetch failed",
    });
  }
}
