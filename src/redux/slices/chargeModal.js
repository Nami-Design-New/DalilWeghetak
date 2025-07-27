import { createSlice } from "@reduxjs/toolkit";

const chargeModal = createSlice({
  name: "chargeModal",
  initialState: {
    show: false,
    totalPrice: 0,
  },

  reducers: {
    setShow: (state, action) => {
      state.show = action.payload;
    },

    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { setShow, setTotalPrice } = chargeModal.actions;
export default chargeModal.reducer;
