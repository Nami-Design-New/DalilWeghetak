import { createSlice } from "@reduxjs/toolkit";

const storedClient = localStorage.getItem("client");

const initialState = {
  client: storedClient ? JSON.parse(storedClient) : null,
};

export const clientData = createSlice({
  name: "clientData",
  initialState,
  reducers: {
    setClientData: (state, action) => {
      state.client = action.payload;
      localStorage.setItem("client", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.client = null;
      localStorage.removeItem("client");
    },
  },
});

export const { setClientData, logout } = clientData.actions;
export default clientData.reducer;
