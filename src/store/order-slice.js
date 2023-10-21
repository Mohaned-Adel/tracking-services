import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    shipment_number: "",
    shipment_currentStatus: {
      state: "",
      timeStamp: "",
    },
    shipment_provider: "",
    shipment_promisedDate: "",
    shipment_transitEvents: [],
  },
  reducers: {
    updateOrderNumber(state, action) {
      state.shipment_number = action.payload.shipment_number;
      state.shipment_currentStatus = action.payload.shipment_currentStatus;
      state.shipment_provider = action.payload.shipment_provider;
      state.shipment_promisedDate = action.payload.shipment_promisedDate;
      state.shipment_transitEvents = action.payload.shipment_transitEvents;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
