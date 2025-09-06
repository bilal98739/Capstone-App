import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from "./BookingPage";

describe("BookingPage Component", () => {
  const mockDispatch = jest.fn();
  const mockSubmit = jest.fn();

  beforeEach(() => {
    mockDispatch.mockClear();
    mockSubmit.mockClear();
  });

  // ---------- HTML5 Validation ----------
  test("Input fields have correct HTML5 validation attributes", () => {
    render(
      <BookingPage availableTimes={["17:00"]} dispatch={mockDispatch} submitForm={mockSubmit} />
    );

    const dateInput = screen.getByLabelText(/Date:/i);
    expect(dateInput).toBeRequired();

    const timeSelect = screen.getByLabelText(/Time:/i);
    expect(timeSelect).toBeRequired();

    const guestsInput = screen.getByLabelText(/Guests:/i);
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  // ---------- Inline Validation ----------
  test("Shows error if guests less than 1", () => {
    render(
      <BookingPage availableTimes={["17:00"]} dispatch={mockDispatch} submitForm={mockSubmit} />
    );

    const guestsInput = screen.getByLabelText(/Guests:/i);
    fireEvent.change(guestsInput, { target: { value: "0" } });

    const errorMessage = screen.getByText(/At least 1 guest required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("Does not show error if guests within valid range", () => {
    render(
      <BookingPage availableTimes={["17:00"]} dispatch={mockDispatch} submitForm={mockSubmit} />
    );

    const guestsInput = screen.getByLabelText(/Guests:/i);
    fireEvent.change(guestsInput, { target: { value: "3" } });

    const errorMessage = screen.queryByText(/At least 1 guest required/i);
    expect(errorMessage).not.toBeInTheDocument();
  });

  // ---------- Form Submission ----------
  test("Submits the form with correct data when valid", () => {
    render(
      <BookingPage
        availableTimes={["17:00"]}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/Date:/i), {
      target: { value: "2025-09-10" },
    });
    fireEvent.change(screen.getByLabelText(/Time:/i), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText(/Guests:/i), {
      target: { value: "4" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Reserve/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      date: "2025-09-10",
      time: "17:00",
      guests: 4, // ensure number type
      occasion: "Birthday",
    });
  });

  test("Does not submit the form if invalid", () => {
    render(
      <BookingPage
        availableTimes={["17:00"]}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/Guests:/i), {
      target: { value: "0" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Reserve/i }));
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
