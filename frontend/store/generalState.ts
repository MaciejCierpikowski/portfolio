import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  scrollDown: false,
  activeSlide: 0,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleScrollDown: (state) => {
      state.scrollDown = !state.scrollDown;
    },
    setActiveSlide: (state, action: PayloadAction<any>) => {
      state.activeSlide = action.payload;
    },
  },
});

export const { toggleScrollDown, setActiveSlide } = generalSlice.actions;

export default generalSlice.reducer;
