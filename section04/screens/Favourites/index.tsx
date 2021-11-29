import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import MealList from '../../components/MealList';
import { useSelector } from 'react-redux';
import Meal from '../../models/meal';
import { FavouritesStackParamList } from '../../routes/FavouritesRoute';
import { RootState } from '../../models/store';

type Props = NativeStackScreenProps<FavouritesStackParamList, 'Favourites'>;

export default function FavouritesScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const MEALS = useSelector((state: RootState) => state.meals.favouriteMeals);

  const handleSelectedMeal = (item: Meal): void => {
    navigation.navigate('MealDetail', { meal: item });
  };

  return <MealList meals={MEALS} onSelectMeal={handleSelectedMeal} />;
}
