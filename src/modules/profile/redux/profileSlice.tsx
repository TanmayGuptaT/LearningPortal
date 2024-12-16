import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    file:null,
    userData:null,
    queries:[]
};

const profileSlice: any = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setFile(state,action) {
      state.file=action.payload
    },
    setUserData(state,action){
        state.userData=action.payload
    },
    setQueries(state,action){
        if (!Array.isArray(state.queries)) {
            state.queries = [];
          }
        state.queries.push(action.payload)
    }
  },
});

export const {
    setFile,
    setUserData,
    setQueries
} = profileSlice.actions;
export default profileSlice.reducer;
