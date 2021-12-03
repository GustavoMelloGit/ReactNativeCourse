import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICartReducer, IOrder, IOrderReducer } from '../models/store';

const initialState: IOrderReducer = {
  orders: [],
};

export const addOrder = createAsyncThunk(
  'products/addProductIntoServer',
  async (cart: ICartReducer, thunkAPI) => {
    const order: IOrder = {
      id: Math.random().toString(),
      cartOrder: cart,
      date: new Date(),
    };
    try {
      const response = await fetch(
        'https://reactnativecourse-f629a-default-rtdb.firebaseio.com/orders/u1.json',
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
  }
);

export const fetchOrders = createAsyncThunk(
  'products/fetchOrders',
  async () => {
    try {
      const response = await fetch(
        'https://reactnativecourse-f629a-default-rtdb.firebaseio.com/orders/u1.json'
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
  }
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      if (action.payload) {
        state.orders = action.payload;
      }
    });
  },
});

export default ordersSlice.reducer;
