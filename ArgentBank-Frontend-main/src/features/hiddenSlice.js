import { createSlice } from "@reduxjs/toolkit";

const hiddenSlice = createSlice({
  name: "hidden",
  initialState: {
    hidden: false,
    checked: false,
    accountId: null,
  },
  reducers: {
    toggleHidden: (state) => {
      state.hidden = !state.hidden;
    },
    toggleChecked: (state) => {
      state.checked = !state.checked;
    },
    toggleAccount: (state, action) => {
      state.accountId = state.accountId === action.payload ? null : action.payload;
    },
  },
});

export const { toggleHidden, toggleChecked, toggleAccount } =
  hiddenSlice.actions;
export default hiddenSlice.reducer;
