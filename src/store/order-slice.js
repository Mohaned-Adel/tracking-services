import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderNumber: "",
  },
  reducers: {
    updateOrderNumber(state, action) {
      state.orderNumber = action.payload.orderNumber;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
