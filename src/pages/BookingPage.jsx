import React, { useState } from "react";
import "./BookingPage.css";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const [errors, setErrors] = useState({
    date: "",
    time: "",
    guests: "",
  });

  const validateField = (name, value) => {
    let errorMsg = "";
    if (name === "date" && !value) errorMsg = "Please select a date";
    if (name === "time" && !value) errorMsg = "Please select a time";
    if (name === "guests") {
      if (!value) errorMsg = "Please enter number of guests";
      else if (value < 1) errorMsg = "At least 1 guest required";
      else if (value > 10) errorMsg = "Maximum 10 guests allowed";
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      setDate(value);
      dispatch({ type: "UPDATE_TIMES", date: new Date(value) });
    } else if (name === "time") setTime(value);
    else if (name === "guests") setGuests(Number(value));
    else if (name === "occasion") setOccasion(value);

    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateField("date", date);
    validateField("time", time);
    validateField("guests", guests);

    if (Object.values(errors).some((err) => err !== "")) {
      alert("Please fix errors before submitting");
      return;
    }

    submitForm({ date, time, guests, occasion });
  };

  const isFormValid =
    date &&
    time &&
    guests >= 1 &&
    guests <= 10 &&
    !Object.values(errors).some((err) => err !== "");

  return (
    <div className="booking-container">
      <h2 className="title">Reserve a Table</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Booking Details</legend>

          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
            required
          />
          {errors.date && (
            <span className="error" role="alert">
              {errors.date}
            </span>
          )}

          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            value={time}
            onChange={handleChange}
            required
          >
            <option value="">Select time</option>
            {availableTimes.map((t, index) => (
              <option key={index} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.time && (
            <span className="error" role="alert">
              {errors.time}
            </span>
          )}

          <label htmlFor="guests">Guests:</label>
          <input
            id="guests"
            type="number"
            name="guests"
            value={guests}
            min="1"
            max="10"
            onChange={handleChange}
            required
          />
          {errors.guests && (
            <span className="error" role="alert">
              {errors.guests}
            </span>
          )}

          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            value={occasion}
            onChange={handleChange}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <button
            type="submit"
            className="reserve-btn"
            aria-label="On Click"
            disabled={!isFormValid}
          >
            Reserve
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default BookingPage;
