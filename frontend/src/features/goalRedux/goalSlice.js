import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "./goal.service";

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
export const getAllGoals = createAsyncThunk(
  "/goals/getgoals",
  async (goal, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      console.log(token)
      return await getGoals(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Add Goal
export const addNewGoal = createAsyncThunk(
  "/goals/setgoal",
  async (goal, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await setGoal(goal, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Update Goal
export const updateAGoal = createAsyncThunk(
  "/goals/updateGoal",
  async (goal, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await updateGoal(goal, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Delete Goal
export const deleteAGoal = createAsyncThunk(
  "/goals/deleteGoal",
  async (goal, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await deleteGoal(goal, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewGoal.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(addNewGoal.fulfilled, (state, action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.goals.push(action.payload)
        
      })
      .addCase(addNewGoal.rejected, (state, action)=>{
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getAllGoals.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(getAllGoals.fulfilled, (state, action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.goals = action.payload
        
      })
      .addCase(getAllGoals.rejected, (state, action)=>{
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteAGoal.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(deleteAGoal.fulfilled, (state, action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.goals = state.goals.filter((goal)=> goal._id !== action.payload.id)
        
      })
      .addCase(deleteAGoal.rejected, (state, action)=>{
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateAGoal.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(updateAGoal.fulfilled, (state, action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.goals = action.payload
        
      })
      .addCase(updateAGoal.rejected, (state, action)=>{
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      
      ;
  },
});

export const { reset } = goalsSlice.actions;

export default goalsSlice.reducer;
