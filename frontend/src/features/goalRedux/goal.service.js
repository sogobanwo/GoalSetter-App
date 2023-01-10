import axios from "axios";

export const getGoals = async (token) => {
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  };
  const response = await axios.get("/api/goals", token, config);
  return response.data;
};

export const setGoal = async (userGoal, token) => {
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  };
  const response = await axios.post("/api/goals", userGoal, config);
  return response.data;
};

export const updateGoal = async (userGoal, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put("/api/goals/:id", userGoal, config);
  return response.data;
};

export const deleteGoal = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete("/api/goals/:id", config);
  return response.data;
};
