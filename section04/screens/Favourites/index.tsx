import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import MealList from '../../components/MealList';
import { useSelector } from 'react-redux';
import Meal from '../../models/meal';
import { FavouritesStackParamList } from '../../routes/FavouritesRoute';
import { RootState } from '../../models/store';
import { styles } from './styles';
import { Text, View } from 'react-native';

type Props = NativeStackScreenProps<FavouritesStackParamList, 'Favourites'>;

export default function FavouritesScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const MEALS = useSelector((state: RootState) => state.meals.favouriteMeals);

  const handleSelectedMeal = (item: Meal): void => {
    navigation.navigate('MealDetail', { meal: item });
  };

  if (MEALS.length === 0 || !MEALS) {
    return (
      <View style={styles.emptyFavourites}>
        <Text style={styles.emptyText}>
          No Favourites yet. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealList meals={MEALS} onSelectMeal={handleSelectedMeal} />;
}
