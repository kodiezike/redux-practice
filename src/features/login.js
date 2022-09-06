import {  createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: { value: { name: "", age: "", email: "" } },
  reducers: {
    loginData: (state, action) => {
      //payload is an object that changes the value of a variable
      state.value = action.payload;
    },
  },
});

export default loginSlice.reducer;

export const loginData = loginSlice.actions;
