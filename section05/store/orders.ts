import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { ICartReducer, IOrder, IOrderReducer } from '../models/store';

const initialState: IOrderReducer = {
  orders: [],
  status: 'idle',
};

export const addOrder = createAsyncThunk<
  ICartReducer,
  any,
  { state: RootState }
>('products/addProductIntoServer', async (cart: ICartReducer, thunkAPI) => {
  const order: IOrder = {
    id: Math.random().toString(),
    cartOrder: cart,
    date: new Date(),
  };
  const { idToken, localId } = thunkAPI.getState().auth.user;
  try {
    const response = await fetch(
      `https://reactnativecourse-f629a-default-rtdb.firebaseio.com/orders/${localId}.json?auth=${idToken}`,
      {
        method: 'POST',
        body: JSON.stringify(order),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const fetchOrders = createAsyncThunk<
  IOrder[],
  any,
  { state: RootState }
>('products/fetchOrders', async (test, thunkAPI) => {
  const { localId } = thunkAPI.getState().auth.user;
  try {
    const response = await fetch(
      `https://reactnativecourse-f629a-default-rtdb.firebaseio.com/orders/${localId}.json`
    );
    const data = await response.json();
    const orders: IOrder[] = [];
    for (const key in data) {
      orders.push({
        id: key,
        ...data[key],
      });
    }
    return orders;
  } catch (e) {
    throw e;
  }
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      if (action.payload) {
        state.orders = action.payload;
        state.status = 'idle';
      }
    });
    builder.addCase(fetchOrders.pending, (state) => {
      state.status = 'loading';
    });
  },
});

export default ordersSlice.reducer;
