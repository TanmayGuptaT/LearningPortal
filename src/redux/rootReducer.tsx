import { combineReducers } from "@reduxjs/toolkit";
import coursesSlice from "../modules/courses/redux/coursesSlice";
import profileSlice from "../modules/profile/redux/profileSlice";


const rootReducer = combineReducers({
 courses:coursesSlice,
 profile:profileSlice
});

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
