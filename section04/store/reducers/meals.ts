import Meal from '../../models/meal';
import { Action } from 'redux';
import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const defaultValue: Meal = {
  id: '',
  categoryIds: [''],
  title: '',
  affordability: '',
  complexity: '',
  imageUrl: '',
  duration: 0,
  ingredients: [''],
  steps: [''],
  isGlutenFree: false,
  isVegan: false,
  isVegetarian: false,
  islactoseFree: false,
};
interface IReducer {
  meals: Meal[];
  filteredMeals: Meal[];
  favouriteMeals: Meal[];
}
const initialState: IReducer = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};
const mealsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      break;
    default:
      return state;
  }
  return state;
};

export default mealsReducer;
