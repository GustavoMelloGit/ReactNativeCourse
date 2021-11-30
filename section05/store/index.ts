import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products';
import cartSlice from './cart';

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
