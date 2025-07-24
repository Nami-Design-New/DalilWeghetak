import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: null,
  userType: "user",
};

export const clientData = createSlice({
  name: "clientData",
  initialState,
  reducers: {
    setClientData: (state, action) => {
      state.client = action.payload;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    logout: (state) => {
      state.client = null;
      state.userType = "user";
    },
  },
});

export const { setClientData, setUserType, logout } = clientData.actions;
export default clientData.reducer;
