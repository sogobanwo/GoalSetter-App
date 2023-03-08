import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthRedux/authSlice";
import goalsReducer from "../features/goalRedux/goalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalsReducer,
  },
});
