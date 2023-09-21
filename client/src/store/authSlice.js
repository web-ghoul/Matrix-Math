import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signed: false,
  token: null,
  user_id: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.user_id = null;
      state.signed = false;
    },
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
