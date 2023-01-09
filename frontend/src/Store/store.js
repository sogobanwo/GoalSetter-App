import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/AuthRedux/authSlice"
import goalsReducer from "../features/goalRedux.js/goalSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalsReducer
  },
});
