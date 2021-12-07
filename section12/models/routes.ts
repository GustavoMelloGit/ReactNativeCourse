import { IPlaceModel } from './store/places/place';

export type RootStackParamList = {
  MapScreen: undefined;
  PlaceDetailScreen: {
    place: IPlaceModel;
  };
  NewPlaceScreen: undefined;
  PlaceListScreen: undefined;
};
