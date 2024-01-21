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
  reducers: {
    addProduct: (state, action) => {
      if (action.payload.rating <= 5) {
        const newProduct = { ...action.payload, id: 16 };
        state.products = [newProduct, ...state.products];
      }
    },
    modifyProduct: (state, action) => {
      if (action.payload.rating <= 5) {
        const data = state.products.map((product) => {
          if (product.id === action.payload.id) {
            console.log(action.payload);
            product = {
              ...action.payload,
            };
          }
          return product;
        });
        state.products = [...data];
      }
    },
    removeProduct: (state, action) => {
      state.products = [
        ...state.products.filter((product) => product.id !== action.payload.id),
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      state.products = [...action.payload];
    });
  },
});

export const productReducer = productSlice.reducer;
export const { modifyProduct, removeProduct, addProduct } =
  productSlice.actions;

export const productSelector = (state) => state.productReducer;
