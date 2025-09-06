import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock react-router-dom so <Link> and <Router> don't break
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

test("renders header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Header/i);
  expect(headerElement).toBeInTheDocument();
});
