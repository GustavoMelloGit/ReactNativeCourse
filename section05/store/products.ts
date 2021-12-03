import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IEditProduct, IProductsReducer } from '../models/store';
import { Dispatch } from 'redux';
import Product from '../models/product';
import { RootState } from '.';

type AsyncThunkConfig = {
  /** return type for `thunkApi.getState` */
  state?: RootState;
  /** type for `thunkApi.dispatch` */
  dispatch?: Dispatch;
  /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
  extra?: unknown;
  /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
  rejectValue?: unknown;
  /** return type of the `serializeError` option callback */
  serializedErrorType?: unknown;
  /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
  pendingMeta?: unknown;
  /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
  fulfilledMeta?: unknown;
  /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
  rejectedMeta?: unknown;
};

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
  const { idToken } = thunkAPI.getState().auth.user;
  const id = Math.random().toString();

  const addedProduct: Product = {
    title,
    description,
    price,
    imageUrl,
    id,
    ownerId: idToken,
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
