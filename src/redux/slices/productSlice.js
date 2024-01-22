import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  sortList: [],
};

const path = process.env.REACT_APP_PRODUCTS_URL;

export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
  async () => {
    const res = await axios.get(path);
    return res.data;
  }
);

export const modifyProductAsync = createAsyncThunk(
  "products/modifyProductAsync",
  async (newData) => {
    const res = await axios.put(`${path}/${newData.id}`, newData);
    return res.data;
  }
);

export const addProductAsync = createAsyncThunk(
  "products/addProductAsync",
  async (newData) => {
    const res = await axios.post(path, newData);
    return res.data;
  }
);

export const removeProductAsync = createAsyncThunk(
  "products/removeProductAsync",
  async (data) => {
    await axios.delete(`${path}/${data.id}`);
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortProducts: (state, action) => {
      const data = [...state.products];
      state.sortList = [...data.sort((a, b) => a.price - b.price)];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.products = [...action.payload];
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.products = [action.payload, ...state.products];
      })
      .addCase(modifyProductAsync.fulfilled, (state, action) => {
        const data = state.products.map((product) => {
          if (product.id === action.payload.id) {
            product = {
              ...action.payload,
            };
          }
          return product;
        });
        state.products = [...data];
      })
      .addCase(removeProductAsync.fulfilled, (state, action) => {
        state.products = [
          ...state.products.filter(
            (product) => product.id !== action.payload.id
          ),
        ];
      });
  },
});

export const productReducer = productSlice.reducer;
export const { sortProducts } = productSlice.actions;

export const productSelector = (state) => state.productReducer;
