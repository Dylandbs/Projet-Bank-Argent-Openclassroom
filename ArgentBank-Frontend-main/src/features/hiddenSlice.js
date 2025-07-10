import { createSlice } from "@reduxjs/toolkit";

const hiddenSlice = createSlice({
  name: "hidden",
  initialState: {
    hidden: false,
    checked: false,
  },
  reducers: {
    toggleHidden: (state) => {
      state.hidden = !state.hidden;
    },
    toggleChecked: (state) => {
      state.checked = !state.checked;
    },
  },
});

export const { toggleHidden, toggleChecked } = hiddenSlice.actions;
export default hiddenSlice.reducer;