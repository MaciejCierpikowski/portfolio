import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  scrollDown: false,
  activeSlide: 0,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleScrollDown: (state, action: PayloadAction<any>) => {
      state.scrollDown = action.payload;
    },
    setActiveSlide: (state, action: PayloadAction<any>) => {
      state.activeSlide = action.payload;
    },
  },
});

export const { toggleScrollDown, setActiveSlide } = generalSlice.actions;

export default generalSlice.reducer;
