import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./redux/home/dashboardSlice";

export const store = configureStore({
  reducer: {
    dashboardData: dashboardSlice,
  },
});
