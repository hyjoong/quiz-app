import "@testing-library/jest-dom";
import Home from "../pages/index";

import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
    };
  },
}));

describe("<Home />", () => {
  const { container } = render(<Home />);

  it("render main page", () => {
    expect(container).toHaveTextContent("Quiz Game");
    expect(container).toHaveTextContent("퀴즈 풀기");
  });
});
