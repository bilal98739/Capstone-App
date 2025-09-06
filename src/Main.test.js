import { render, screen } from "@testing-library/react";
import Main from "./Main";

// 🟢 Mock api.js
jest.mock("../api", () => ({
  fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00"]),
  submitAPI: jest.fn(() => true),
}));

// 🟢 Mock react-router-dom (useNavigate)
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("Booking API Tests", () => {
  test("initializeTimes should load available times", () => {
    render(<Main />);
    const option = screen.getByText("17:00");
    expect(option).toBeInTheDocument();
  });
});
