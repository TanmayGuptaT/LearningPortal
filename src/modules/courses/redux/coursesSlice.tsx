import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    files:null
};

const coursesSlice: any = createSlice({
  name: "course",
  initialState: initialState,
  reducers: {
    setFiles(state,action) {
      state.files=action.payload
    },
  },
});

export const {
    setFiles,
} = coursesSlice.actions;
export default coursesSlice.reducer;
