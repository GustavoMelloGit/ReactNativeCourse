import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IEditProduct, IProductsReducer } from '../models/store';
import Product from '../models/product';
import { RootState } from '.';

const initialState: IProductsReducer = {
  availableProducts: [],
  userProducts: [],
  status: 'loading',
  error: null,
};

export const addProductIntoServer = createAsyncThunk(
  'products/addProductIntoServer',
  async (product: Product, thunkAPI) => {
    try {
      const response = await fetch(
        'https://reactnativecourse-f629a-default-rtdb.firebaseio.com/products.json',
        {
          method: 'POST',
          body: JSON.stringify(product),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchProductsFromServer = createAsyncThunk(
  'products/fetchProductsFromServer',
  async () => {
    try {
      const response = await fetch(
        'https://reactnativecourse-f629a-default-rtdb.firebaseio.com/products.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const resData = await response.json();
      const loadedProducts = [];
      for (const key in resData) {
        loadedProducts.push(
          new Product(
            key,
            resData[key].ownerId,
            resData[key].title,
            resData[key].imageUrl,
            resData[key].description,
            resData[key].price
          )
        );
      }
      return loadedProducts as Product[];
    } catch (error) {
      console.log(error);
    }
  }
);

export const editProductInServer = createAsyncThunk(
  'products/editProductInServer',
  async (product: IEditProduct, thunkAPI) => {
    try {
      const response = await fetch(
        `https://reactnativecourse-f629a-default-rtdb.firebaseio.com/products/${product.id}.json`,
        {
          method: 'PATCH',
          body: JSON.stringify({
            title: product.title,
            description: product.description,
            imageUrl: product.imageUrl,
            price: product.price,
          }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProductFromServer = createAsyncThunk(
  'products/deleteProductFromServer',
  async (productId: string, thunkAPI) => {
    try {
      const response = await fetch(
        `https://reactnativecourse-f629a-default-rtdb.firebaseio.com/products/${productId}.json`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProductIntoServer.fulfilled, (state, action) => {});
    builder.addCase(fetchProductsFromServer.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchProductsFromServer.fulfilled, (state, action) => {
      if (action.payload) {
        const products: Product[] = action.payload;
        state.availableProducts = products;
        state.userProducts = products.filter((prod) => prod.ownerId === 'u1');
        state.status = 'idle';
        state.error = null;
      }
    });
  },
});

export const status = (state: RootState) => state.products.status;
export default productsSlice.reducer;
