import { configureStore } from "@reduxjs/toolkit";
import parentInstructorReducer from "./slice/subhikshaslice";

export const store = configureStore({
  reducer: {
    parentInstructorLogin: parentInstructorReducer, // use this name consistently
  }
});
