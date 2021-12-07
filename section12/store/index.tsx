import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import placesSlice from './places';

export const store = configureStore({
  reducer: {
    places: placesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
