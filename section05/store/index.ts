import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products';
import cartSlice from './cart';
import orderSlice from './orders';

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    order: orderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
