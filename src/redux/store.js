import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { cartReducer } from "./slices/cartSlice";

//configuring store.
export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
  },
});
