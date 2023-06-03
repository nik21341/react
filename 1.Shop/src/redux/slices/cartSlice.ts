import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Cart } from './fetchCartSlice';

interface CartSliceState {
  totalPrice: number;
  items: Cart[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Cart>) {
      const itemCount = state.items.find((obj) => obj.id === action.payload.id);

      if (itemCount) {
        itemCount.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    removeItem(state, action: PayloadAction<Cart>) {
      state.items = state.items.filter((cart) => cart.id !== action.payload.id);
      state.totalPrice = state.totalPrice - action.payload.price;
    },

    minusCountCart(state, action: PayloadAction<Cart>) {
      const itemCount = state.items.find((obj) => obj.id === action.payload.id);
      if (itemCount) {
        state.totalPrice = state.totalPrice - itemCount.price;
        itemCount.count--;
      }
    },

    clearItems(state) {
      state.items = [];
    },
  },
});

export const selectCarts = (state: RootState) => state.cart;

export const { addProduct, removeItem, clearItems, minusCountCart } = cartSlice.actions;

export default cartSlice.reducer;
