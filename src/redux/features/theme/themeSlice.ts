import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  mode: "light" | "dark";
};
const initialState: TInitialState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
