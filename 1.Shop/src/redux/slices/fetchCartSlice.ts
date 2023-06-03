import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export const fetchData = createAsyncThunk('fetchCart/fetchData', async (category: string) => {
  const { data } = await axios.get<ResponseData>(
    `https://dummyjson.com/products/${category}/?limit=100`,
  );

  return data.products;
});

interface ResponseData {
  products: Cart[];
  total: number;
  skip: number;
  limit: number;
}

export interface Cart {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  count: number;
}

export const enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface FetchCartSliceState {
  data: Cart[];
  status: Status;
}

const initialState: FetchCartSliceState = {
  data: [],
  status: Status.LOADING,
};

export const fetchCartSlice = createSlice({
  name: 'fetchCart',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = Status.LOADING;
      state.data = [];
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = [];
    });
  },
});

export const selectFetchCart = (state: RootState) => state.fetchCart;

export const { setData } = fetchCartSlice.actions;

export default fetchCartSlice.reducer;
