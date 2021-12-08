import { IPlaceModel } from './store/places/place';

export type RootStackParamList = {
  MapScreen: undefined;
  PlaceDetailScreen: {
    place: IPlaceModel;
  };
  NewPlaceScreen?: { lat: number; lng: number };
  PlaceListScreen: undefined;
};
