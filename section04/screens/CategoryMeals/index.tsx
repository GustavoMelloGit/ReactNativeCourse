import React, { useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/MealsNavigation';
import { useSelector } from 'react-redux';
import Meal from '../../models/meal';
import MealList from '../../components/MealList';
import { RootState } from '../../models/store';
import { Text, View } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'CategoryMeals'>;

export default function CategoryMealScreen(props: Props): JSX.Element {
  const { route, navigation } = props;
  const MEALS = useSelector((state: RootState) => state.meals.filteredMeals);

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.category.id)
  );

  const handleSelectedMeal = (item: Meal): void => {
    navigation.navigate('MealDetail', { meal: item });
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.category.title });
  }, []);

  if (displayedMeals.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No meals found, maybe check your filters?</Text>
      </View>
    );
  }
  return <MealList onSelectMeal={handleSelectedMeal} meals={displayedMeals} />;
}
