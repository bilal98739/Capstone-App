import { initializeTimes, updateTimes } from "./Main";

// Test for initializeTimes
test("initializeTimes returns an array of times", () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times).toContain("17:00");
  expect(times.length).toBeGreaterThan(0);
});

// Test for updateTimes
test("updateTimes returns the same state when no logic applied", () => {
  const initialState = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", date: "2025-09-05" };
  const newState = updateTimes(initialState, action);

  expect(newState).toEqual(initialState);
});
