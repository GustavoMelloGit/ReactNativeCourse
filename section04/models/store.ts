import { store } from '../App';
import Meal from './meal';

export type RootState = ReturnType<typeof store.getState>;
export type FilterSettings = {
  glutenFree: boolean;
  lactoseFree: boolean;
  vegan: boolean;
  vegetarian: boolean;
};

export type MealAction = {
  mealId: string;
};
export type FilterAction = {
  filterSettings: FilterSettings;
};

export type ActionProps = {
  type: string;
  meal: string;
  filter: FilterSettings;
};
export type DispatchType = (args: MealAction) => MealAction;
