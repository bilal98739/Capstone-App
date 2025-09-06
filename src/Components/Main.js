// src/Components/Main.js
import React, { useReducer } from "react";
import BookingPage from "../pages/BookingPage";
import { fetchAPI, submitAPI } from "../api";  // ✅ yahan api import karni hai
import { useNavigate } from "react-router-dom";

// Reducer for managing available times
const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.date);
  }
  return state;
};

// Initialize times
const initializeTimes = () => {
  return fetchAPI(new Date());
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  // ✅ form submit function
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed"); // redirect to confirmation page
    }
  };

  return (
    <BookingPage
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
}

export default Main;
