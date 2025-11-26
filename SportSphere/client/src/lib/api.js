const API = "http://localhost:5000/";

export const api = {
  signup: (data) =>
    fetch(`${API}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),

  login: (data) =>
    fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),

  getProfile: (token) =>
    fetch(`${API}/profile/me`, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  updateProfile: (token, data) =>
    fetch(`${API}/profile/me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }),

  getEvents: () => fetch(`${API}/events`),

  createEvent: (token, data) =>
    fetch(`${API}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }),

  enroll: (token, event_id) =>
    fetch(`${API}/enrollments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ event_id }),
    }),
};
