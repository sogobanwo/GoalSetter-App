import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../goalRedux.js/goal.service";

// goals Initial state
const initialState = {
  goals: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ASYNCTHUNK FUNCTIONS

// Get Goals
export const getAllGoals = createAsyncThunk("/goals/getgoals", async(goal, thunkAPI)=>{
  try {
    return await getGoals(goal)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }

 })

// Add Goal
export const addNewGoal = createAsyncThunk("/goals/setgoal", async(goal, thunkAPI)=>{
  try {
    return await setGoal(goal)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }

 })
// Update Goal
export const updateAGoal = createAsyncThunk("/goals/updateGoal", async(goal, thunkAPI)=>{
  try {
    return await updateGoal(goal)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }

 })
// Delete Goal
export const deleteAGoal = createAsyncThunk("/goals/deleteGoal", async(goal, thunkAPI)=>{
  try {
    return await deleteGoal(goal)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }

 })

//  


// SLICE
// Goals Slice
const goalsSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.goals = []
    },
  },
  extraReducers: (builder) => {},
});


export const {reset} = goalsSlice.actions

export default goalsSlice.reducer