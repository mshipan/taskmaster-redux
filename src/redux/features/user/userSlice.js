import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Shipan",
  email: "shipan@gmail.com",
  userTasks: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

const userReducer = userSlice.reducer;
export default userReducer;
