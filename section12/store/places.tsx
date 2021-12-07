import { createSlice } from '@reduxjs/toolkit';
import { IPlaceModel } from '../models/store/places/place';

const initialState = {
  places: [] as IPlaceModel[],
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const title: string = action.payload;
      const newPlace: IPlaceModel = {
        id: new Date().getTime().toString(),
        title: title,
      };
      state.places.push(newPlace);
    },
  },
});

export const { addPlace } = placesSlice.actions;
export default placesSlice.reducer;
