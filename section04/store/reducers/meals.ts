import Meal from '../../models/meal';
import { MEALS } from '../../data/dummy-data';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals';
import { ActionProps, MealAction } from '../../models/store';
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

const mealsReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.meal
      );

      if (existingIndex >= 0) {
        return {
          ...state,
          favouriteMeals: state.favouriteMeals.filter(
            (meal) => meal.id !== action.meal
          ),
        };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.meal);
        if (meal) {
          return {
            ...state,
            favouriteMeals: state.favouriteMeals.concat(meal),
          };
        }
      }
      break;

    case SET_FILTERS:
      const appliedFilters = action.filter;
      const filteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.islactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals };
    default:
      return state;
  }
  return state;
};

export default mealsReducer;
