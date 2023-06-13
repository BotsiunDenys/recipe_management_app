import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../services/AuthService";
import { AccessToken, UserAuthData } from "../../models/AuthModel";

interface AuthState {
  isLogged: boolean;
  loading: boolean;
  error: string;
}

const initialAuthState: AuthState = {
  isLogged: false,
  loading: false,
  error: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }: UserAuthData) => {
    const response = await AuthService.login({ username, password });
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  }
);

export const registration = createAsyncThunk(
  "auth/register",
  async ({ username, password }: UserAuthData) => {
    const response = await AuthService.registration({ username, password });
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  }
);

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  const response = await axios.get<AccessToken>(
    `${import.meta.env.VITE_API_URL}/auth/refresh`,
    { withCredentials: true }
  );
  localStorage.setItem("token", response.data.accessToken);
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await AuthService.logout();
  localStorage.removeItem("token");
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.isLogged = false;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.loading = false;
      state.isLogged = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) state.error = action.error.message;
    });
    builder.addCase(registration.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.isLogged = false;
    });
    builder.addCase(registration.fulfilled, (state) => {
      state.loading = false;
      state.isLogged = true;
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) state.error = action.error.message;
    });
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.isLogged = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.isLogged = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) state.error = action.error.message;
    });
    builder.addCase(checkAuth.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.isLogged = false;
    });
    builder.addCase(checkAuth.fulfilled, (state) => {
      state.loading = false;
      state.isLogged = true;
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.loading = false;
      if (action.error.message) state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
