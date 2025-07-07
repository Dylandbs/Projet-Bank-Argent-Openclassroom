import { createSlice } from "@reduxjs/toolkit";
import { GetCookie, DeleteCookie } from "../components/cookieUtils";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!GetCookie("token"),
    token: GetCookie("token") || null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      DeleteCookie("token");
    },
    syncCookies: (state) => {
      state.isAuthenticated = !!GetCookie("token");
      state.token = GetCookie("token") || null;
    },
  },
});

export const { login, logout, syncCookies } = authSlice.actions;
export default authSlice.reducer;