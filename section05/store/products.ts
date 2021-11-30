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
  reducers: {},
});
export const {} = productsSlice.actions;
export default productsSlice.reducer;
