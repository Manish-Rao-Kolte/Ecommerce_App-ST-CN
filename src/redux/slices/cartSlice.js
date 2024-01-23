import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
};

// URL or API for cart items.
const path = process.env.REACT_APP_CART_URL;

// async function to get data from DB and store in local variable.
export const getCartAsync = createAsyncThunk("cart/getCartAsync", async () => {
  const res = await axios
    .get(path)
    .catch((err) => toast.error("An error occured!!"));
  return res.data;
});

//async function to add product to cart in DB and local variable.
export const addProductToCartAsync = createAsyncThunk(
  "cart/addProductToCartAsync",
  async (data) => {
    const res = await axios
      .post(`${path}`, data)
      .then((res) => {
        toast.success("Product added to cart!!");
        return res;
      })
      .catch((err) => toast.error("An error occured!!"));
    return res.data;
  }
);

//async function to remove product from cart.
export const removeProductFromCartAsync = createAsyncThunk(
  "cart/removeProductFromCartAsync",
  async (data) => {
    await axios
      .delete(`${path}/${data.id}`)
      .catch((err) => toast.error("An error occured with server!!"));
    toast.success("Product removed from cart!!");
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
