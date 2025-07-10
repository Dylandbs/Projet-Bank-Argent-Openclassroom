import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import hiddenReducer from "./features/hiddenSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    hidden: hiddenReducer,
  },
});

export default store;
