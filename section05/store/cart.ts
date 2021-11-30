import { createSlice } from '@reduxjs/toolkit';
import Product from '../models/product';
import { ICartReducer } from '../models/store';

const initialState: ICartReducer = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product: Product = action.payload;
      state.totalAmount += product.price;
      const itemAlreadyInCart = state.items.find(
        (item) => item.product.id === product.id
      );
      if (itemAlreadyInCart) {
        itemAlreadyInCart.quantity++;
      } else {
        state.items.push({ quantity: 1, product });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
