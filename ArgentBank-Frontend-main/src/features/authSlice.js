import { createSlice } from "@reduxjs/toolkit";
import { GetCookie, DeleteCookie } from "../components/cookieUtils";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!GetCookie("token"),
    token: GetCookie("token") || null,
    dataUser: JSON.parse(localStorage.getItem("userData")) || {},
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
      localStorage.removeItem("userData");
    },
    syncCookie: (state) => {
      state.isAuthenticated = !!GetCookie("token");
      state.token = GetCookie("token") || null;
    },
    setDataUser: (state, action) => {
      state.dataUser = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    editUsername: (state, action) => {
      const { userName } = action.payload;
      state.dataUser.userName = userName;
      localStorage.setItem("userData", JSON.stringify(state.dataUser));
    },
  },
});

export const { login, logout, syncCookie, setDataUser, editUsername
  
 } = authSlice.actions;
export default authSlice.reducer;
