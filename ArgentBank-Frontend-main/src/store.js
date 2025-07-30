import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import hiddenReducer from "./features/hiddenSlice";
import accountReducer from "./features/accountSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    hidden: hiddenReducer,
    accounts: accountReducer,
  },
});

export default store;
