import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollDown: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleScrollDown: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.scrollDown = !state.scrollDown;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleScrollDown } = generalSlice.actions;

export default generalSlice.reducer;
