import axios from "axios";

export const getGoals = async () => {
  const response = await axios.get("/api/goals")
};


export const setGoal = async (userGoal) => {
  const response = await axios.post("/api/goals", userGoal);
};


export const updateGoal = async (userGoal) => {
  const response = await axios.put("/api/goals/:id", userGoal);
};


export const deleteGoal = async () => {
  const response = await axios.delete("/api/goals/:id");

};
