import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";

test("renders Home", () => {
    render(<Home />);
    const HomeElement = screen.getByText(/Rey PJ Baliguat/i);
    expect(HomeElement).toBeInTheDocument();
});
