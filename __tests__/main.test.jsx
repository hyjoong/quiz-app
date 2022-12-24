import "@testing-library/jest-dom";
import Home from "../pages/index";

import { render } from "@testing-library/react";

describe("<Home />", () => {
  it("render main page", () => {
    const { container } = render(<Home />);

    expect(container).toHaveTextContent("Quiz Game");
    expect(container).toHaveTextContent("퀴즈 풀기");
  });
});
