import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import userReducer from "./features/user/userSlice";
import baseApi from "./features/api/baseApi";

const store = configureStore({
  reducer: {
    tasksSlice: tasksReducer,
    userSlice: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
export default store;
