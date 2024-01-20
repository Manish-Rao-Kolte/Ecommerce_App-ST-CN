import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
  async (path) => {
    const res = await axios.get(path);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      state.products = [...action.payload];
    });
  },
});

export const productReducer = productSlice.reducer;
export const actions = productSlice.actions;

export const productSelector = (state) => state.productReducer;
