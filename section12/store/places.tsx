import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IPlaceModel } from '../models/store/places/place';
import * as FileSystem from 'expo-file-system';
import { Alert } from 'react-native';
import { insertPlace, fetchPlaces } from '../helpers/db';
import { IPlacesState } from '../models/store/places/state';

export const handleAddPlace = createAsyncThunk(
  'place/AddPlace',
  async (place: IPlaceModel) => {
    const fileName = place.imageUri.split('/').pop();
    if (!fileName) {
      return;
    }
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: place.imageUri,
        to: newPath,
      });

      const newPlace: IPlaceModel = {
        ...place,
        imageUri: newPath,
      };
      const dbResult = await insertPlace(newPlace);
      return JSON.stringify(dbResult);
    } catch (e: any) {
      Alert.alert('Error', e.message);
    }
  }
);

export const loadPlaces = createAsyncThunk('place/FetchPlaces', async () => {
  try {
    const places = await fetchPlaces();
    return JSON.stringify(places);
  } catch (e: any) {
    Alert.alert('Error', e.message);
  }
});

const initialState: IPlacesState = {
  places: [] as IPlaceModel[],
  status: 'idle',
  error: '',
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    // addPlace: (state, action) => {
    //   const { title, image }: { title: string; image: string } = action.payload;
    //   const newPlace: IPlaceModel = {
    //     id: new Date().getTime().toString(),
    //     title: title,
    //     imageUri: image,
    //     address: '',
    //     lat: 0,
    //     lng: 0,
    //   };
    //   state.places.push(newPlace);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(handleAddPlace.fulfilled, (state, action) => {});
    builder.addCase(loadPlaces.pending, (state, action) => {
      state.status = 'loading';
      state.error = '';
    }),
      builder.addCase(loadPlaces.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        const dbResult = JSON.parse(action.payload);
        const places: IPlaceModel[] = dbResult.rows._array;
        state.places = places;
        state.status = 'idle';
        state.error = '';
      });
  },
});

export const {} = placesSlice.actions;
export default placesSlice.reducer;
