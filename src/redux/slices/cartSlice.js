import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const addProductToCartAsync = createAsyncThunk(
  "cart/addProductToCartAsync",
  async () => {}
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});
