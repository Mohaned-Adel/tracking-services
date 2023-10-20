import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./order-slice";

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

export default store;
