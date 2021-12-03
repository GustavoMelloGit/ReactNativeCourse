import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products';
import cartSlice from './cart';
import orderSlice from './orders';
import authSlice from './auth';

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    order: orderSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
