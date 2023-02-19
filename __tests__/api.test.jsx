import axios from "axios";
import { QUIZ_LIZT } from "./mock/quiz";

describe("quiz list api test", () => {
  test("call quiz api ", async () => {
    const response = await axios("/api/quiz");
    const { data } = response;
    expect(response.status).toBe(200);
    expect(data).toHaveLength(2);
    expect(data).toEqual(QUIZ_LIZT);
  });
});
