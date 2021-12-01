import { createSlice } from '@reduxjs/toolkit';
import { IProductsReducer } from '../models/store';
import PRODUCTS from '../data/dummy-data';

const initialState: IProductsReducer = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      const productId: string = action.payload;
      state.userProducts = state.userProducts.filter(
        (prod) => prod.id !== productId
      );
      state.availableProducts = state.availableProducts.filter(
        (prod) => prod.id !== productId
      );
    },
  },
});
export const { deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
