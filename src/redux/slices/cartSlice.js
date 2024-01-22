import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
};

const path = process.env.REACT_APP_CART_URL;

export const getCartAsync = createAsyncThunk("cart/getCartAsync", async () => {
  const res = await axios.get(path);
  return res.data;
});

export const addProductToCartAsync = createAsyncThunk(
  "cart/addProductToCartAsync",
  async (data) => {
    const res = await axios.post(`${path}`, data);
    return res.data;
  }
);

export const removeProductFromCartAsync = createAsyncThunk(
  "cart/removeProductFromCartAsync",
  async (data) => {
    await axios.delete(`${path}/${data.id}`);
    return data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartAsync.fulfilled, (state, action) => {
        state.cart = [...action.payload];
      })
      .addCase(addProductToCartAsync.fulfilled, (state, action) => {
        state.cart = [action.payload, ...state.cart];
      })
      .addCase(removeProductFromCartAsync.fulfilled, (state, action) => {
        state.cart = [
          ...state.cart.filter((product) => product.id !== action.payload.id),
        ];
      });
  },
});

export const cartReducer = cartSlice.reducer;
export const actions = cartSlice.actions;
export const cartSelector = (state) => state.cartReducer;
