export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavourite = (id: number) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};
