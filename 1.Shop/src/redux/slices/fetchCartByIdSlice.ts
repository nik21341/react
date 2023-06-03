import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { Cart, Status } from './fetchCartSlice';

export const fetchData = createAsyncThunk('fetchCart/fetchData', async (params: string) => {
  const { data } = await axios.get<Cart>(`https://dummyjson.com/products/${params.id}`);

  return data;
});

interface FetchCartByIdSliceState {
  data: Cart;
  status: Status;
}

const initialState: FetchCartByIdSliceState = {
  data: ,
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
