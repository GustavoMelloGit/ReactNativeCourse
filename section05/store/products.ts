import { createSlice } from '@reduxjs/toolkit';
import { IEditProduct, IProductsReducer } from '../models/store';
import PRODUCTS from '../data/dummy-data';
import Product from '../models/product';

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
    addProduct: (state, action) => {
      const { title, imageUrl, description, price } = action.payload;

      const newProduct: Product = new Product(
        Math.random().toString(),
        'u1',
        title,
        imageUrl,
        description,
        price
      );

      state.availableProducts.push(newProduct);
      state.userProducts.push(newProduct);
    },
    editProduct: (state, action) => {
      const { title, description, imageUrl, price, id }: IEditProduct =
        action.payload;

      const userProduct = state.userProducts.find((prod) => prod.id === id);
      const availableProduct = state.availableProducts.find(
        (prod) => prod.id === id
      );

      if (userProduct && availableProduct) {
        userProduct.title = title;
        userProduct.description = description;
        userProduct.imageUrl = imageUrl;
        userProduct.price = +price;
        availableProduct.title = title;
        availableProduct.description = description;
        availableProduct.imageUrl = imageUrl;
        availableProduct.price = +price;
      }
    },
  },
});
export const { deleteProduct, addProduct, editProduct } = productsSlice.actions;
export default productsSlice.reducer;
