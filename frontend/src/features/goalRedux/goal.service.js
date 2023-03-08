import axios from "axios";

export const getGoals = async (token) => {
  const config = {
    headers: {
      authorization: `Bearer ` + token,
    },
  };
  const response = await axios.get("/api/goals", config);
  return response.data;
};

export const setGoal = async (userGoal, token) => {
  const config = {
    headers: {
      authorization: `Bearer ` + token,
    },
  };
  const response = await axios.post("/api/goals", userGoal, config);
  return response.data;
};

export const updateGoal = async (goalObject, token) => {
  const config = {
    headers: {
      authorization: "Bearer " + token,
    },
  };
  const { goal, id } = goalObject;
  const response = await axios.patch(`/api/goals/${id}`, goal, config);
  return response.data;
};

export const getOneGoal = async (id, token) => {
  const config = {
    headers: {
      authorization: `Bearer ` + token,
    },
  };
  const response = await axios.get(`/api/goals/${id}`, config);
  return response.data;
};

export const deleteGoal = async (id, token) => {
  const config = {
    headers: {
      authorization: `Bearer ` + token,
    },
  };
  const response = await axios.delete(`/api/goals/${id}`, config);
  return response.data;
};
