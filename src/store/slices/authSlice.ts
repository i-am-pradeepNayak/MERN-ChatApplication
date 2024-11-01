/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { useActionData } from "react-router-dom";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  token: "",
  email: "",
  error: false,
};

export const LoginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      await axios.post("/auth/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

// Verify OTP Thunk
export const verifyOTP = createAsyncThunk(
  "auth/verifyOtp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/verifyOtp", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogout: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Login User
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.token = "";
      })
      // Register User
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.email = action.payload.email;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      // Verify OTP
      .addCase(verifyOTP.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        console.log("action",action)
        state.isLoading = false;
        state.error = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(verifyOTP.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const authState = () => (state) => state.auth;

export default authSlice.reducer;
export const { handleLogout } = authSlice.actions;
