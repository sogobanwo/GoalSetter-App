import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/AuthRedux/authSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
