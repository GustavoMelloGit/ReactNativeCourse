import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import MealList from '../../components/MealList';
import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/meal';
import { FavouritesStackParamList } from '../../routes/FavouritesRoute';

type Props = NativeStackScreenProps<FavouritesStackParamList, 'Favourites'>;

export default function FavouritesScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const favouriteMeals = MEALS.filter((meal) => meal.duration < 20);

  const handleSelectedMeal = (item: Meal): void => {
    navigation.navigate('MealDetail', { meal: item });
  };

  return <MealList meals={favouriteMeals} onSelectMeal={handleSelectedMeal} />;
}
