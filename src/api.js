// src/api.js

// fake API for demo purpose
export const fetchAPI = (date) => {
  let result = [];
  const times = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  // randomly filter some times to simulate availability
  for (let i = 0; i < times.length; i++) {
    if (Math.random() > 0.5) {
      result.push(times[i]);
    }
  }

  return result.length > 0 ? result : times; // fallback: return all times if empty
};

export const submitAPI = (formData) => {
  console.log("📩 Submitting booking:", formData);
  // simulate API call (always returns true)
  return true;
};
