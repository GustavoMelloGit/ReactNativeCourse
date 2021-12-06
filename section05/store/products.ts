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

export const addProductIntoServer = createAsyncThunk<
  Product,
  any,
  { state: RootState }
>('products/addProductIntoServer', async (product, thunkAPI) => {
  const { title, description, price, imageUrl } = product;
  const { idToken, localId } = thunkAPI.getState().auth.user;
  const id = Math.random().toString();

  const addedProduct: Product = {
    title,
    description,
    price,
    imageUrl,
    id,
    ownerId: localId,
  };
  try {
    const response = await fetch(
      `https://reactnativecourse-f629a-default-rtdb.firebaseio.com/products.json?auth=${idToken}`,
      {
        method: 'POST',
        body: JSON.stringify(addedProduct),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const fetchProductsFromServer = createAsyncThunk<
  any,
  any,
  { state: RootState }
>('products/fetchProductsFromServer', async (any, thunkAPI) => {
  const { localId } = thunkAPI.getState().auth.user;
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
    return { loadedProducts, userId: localId };
  } catch (error) {
    console.log(error);
  }
});

export const editProductInServer = createAsyncThunk<
  IEditProduct,
  IEditProduct,
  {
    state: RootState;
  }
>('products/editProductInServer', async (product: IEditProduct, thunkAPI) => {
  const { idToken } = thunkAPI.getState().auth.user;
  try {
    const response = await fetch(
      `https://reactnativecourse-f629a-default-rtdb.firebaseio.com/products/${product.id}.json?auth=${idToken}`,
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
    console.log(error);
  }
});

export const deleteProductFromServer = createAsyncThunk<
  string,
  any,
  { state: RootState }
>('products/deleteProductFromServer', async (productId: string, thunkAPI) => {
  const { idToken } = thunkAPI.getState().auth.user;
  try {
    const response = await fetch(
      `https://reactnativecourse-f629a-default-rtdb.firebaseio.com/products/${productId}.json?auth=${idToken}`,
      {
        method: 'DELETE',
      }
    );
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

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
        const {
          loadedProducts,
          userId,
        }: { loadedProducts: Product[]; userId: string } = action.payload;
        state.availableProducts = loadedProducts;
        state.userProducts = loadedProducts.filter(
          (prod) => prod.ownerId === userId
        );
        state.status = 'idle';
        state.error = null;
      }
    });
  },
});

export const status = (state: RootState) => state.products.status;
export default productsSlice.reducer;
