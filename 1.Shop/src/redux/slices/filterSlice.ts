import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface FilterSliceState {
  categoryName?: string;
  sortCart?: string;
  queryCart?: string;
}

const initialState: FilterSliceState = {
  categoryName: 'all',
  sortCart: '',
  queryCart: '',
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryName(state, action: PayloadAction<string>) {
      state.categoryName = action.payload;
    },
    setSortCart(state, action: PayloadAction<string>) {
      state.sortCart = action.payload;
    },
    setQueryCart(state, action: PayloadAction<string>) {
      state.queryCart = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.categoryName = action.payload.categoryName;
      state.sortCart = action.payload.sortCart;
      state.queryCart = action.payload.queryCart;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const { setCategoryName, setSortCart, setQueryCart, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
