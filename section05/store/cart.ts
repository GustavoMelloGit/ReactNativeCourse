import { createSlice } from '@reduxjs/toolkit';
import Product from '../models/product';
import { ICartProduct, ICartReducer } from '../models/store';

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
    removeFromCart: (state, action) => {
      const { product, quantity }: ICartProduct = action.payload;

      if (quantity === 1) {
        state.items = state.items.filter(
          (item) => item.product.id !== product.id
        );
      } else {
        const item = state.items.find((item) => item.product.id === product.id);
        if (item) {
          item.quantity--;
        }
      }
      state.totalAmount -= product.price;
    },
    deleteProductFromCart: (state, action) => {
      const product: Product = action.payload;
      state.items = state.items.filter(
        (item) => item.product.id !== product.id
      );
      state.totalAmount -= product.price;
    },
    cleanCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, cleanCart, deleteProductFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
