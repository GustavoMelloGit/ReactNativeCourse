import { createSlice } from '@reduxjs/toolkit';
import { IOrder, IOrderReducer } from '../models/store';

const initialState: IOrderReducer = {
  orders: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const { cartOrder, date, id }: IOrder = action.payload;

      if (cartOrder.items.length === 0) {
        return state;
      }

      state.orders.push({
        cartOrder,
        date,
        id,
      });
      console.log('-----------------------------------------------------');
      console.log(state.orders);
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
