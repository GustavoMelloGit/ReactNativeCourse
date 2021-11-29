import { FilterSettings } from '../../models/store';

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavourite = (id: string) => {
  return { type: TOGGLE_FAVORITE, meal: id };
};
export const setFilters = (filterSettings: FilterSettings) => {
  return { type: SET_FILTERS, filter: filterSettings };
};
