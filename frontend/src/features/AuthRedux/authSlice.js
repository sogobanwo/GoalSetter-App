import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { registerNewUser, logout, login } from "./auth.services"

// Check if there is an existing user
const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
  user: user ? user : null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ""
}


// ASYNCTHUNK FUNCTIONS
// Register User
 export const registerUser = createAsyncThunk("/auth/register", async(user, thunkAPI)=>{
  try {
    return await registerNewUser(user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }

 })

// Login User
export const loginUser = createAsyncThunk("/auth/login", async(user, thunkAPI)=>{
  try {
    return await login(user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }

 })

// Logout User
 export const logoutUser = createAsyncThunk("/auth/logout" , async(user, thunkAPI)=>{
  await logout()
 })

// SLICE
//  Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false  
      state.isError = false
      state.isSuccess = false
      state.message = ""
    }
  },
  extraReducers: (builder) =>{
    builder
      .addCase(registerUser.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(registerUser.rejected, (state, action)=>{
        state.isLoading = false
        state.isError = true
        state.user = null
        state.message = action.payload
      })
      .addCase(loginUser.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(loginUser.rejected, (state, action)=>{
        state.isLoading = false
        state.isError = true
        state.user = null
        state.message = action.payload
      })
      .addCase(logoutUser.fulfilled, (state)=>{
        state.user = null
      })
  }
}) 

export const {reset} = authSlice.actions

export default authSlice.reducer