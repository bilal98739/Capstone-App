import { render, screen } from "@testing-library/react";
import ConfirmedBooking from "./ConfirmedBooking";

describe("ConfirmedBooking Component", () => {
  test("Renders the booking confirmation message", () => {
    render(<ConfirmedBooking />);
    const message = screen.getByText(/Booking Confirmed/i);
    expect(message).toBeInTheDocument();
  });

  test("Page should contain a thank you message", () => {
    render(<ConfirmedBooking />);
    const thankYouText = screen.getByText(/Thank you/i);
    expect(thankYouText).toBeInTheDocument();
  });
});
