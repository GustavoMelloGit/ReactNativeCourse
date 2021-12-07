import { IPlaceModel } from './place';

export interface IPlacesState {
  places: IPlaceModel[];
  status: 'idle' | 'loading';
  error: any;
}
