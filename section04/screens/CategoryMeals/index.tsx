import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/MealsNavigation';
import { styles } from './styles';
import { MEALS } from '../../data/dummy-data';
import CategoryMealItem from '../../components/CategoryMealItem';
import Meal from '../../models/meal';

type Props = NativeStackScreenProps<RootStackParamList, 'CategoryMeals'>;

export default function CategoryMealScreen(props: Props): JSX.Element {
  const { route, navigation } = props;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.category.id)
  );

  const handleSelectedMeal = (item: Meal): void => {
    navigation.navigate('MealDetail', { meal: item });
  };

  useEffect(() => {
    navigation.setOptions({ title: route.params.category.title });
  }, []);

  return (
    <FlatList
      data={displayedMeals}
      contentContainerStyle={{ alignItems: 'center' }}
      renderItem={(item) => (
        <CategoryMealItem item={item.item} onSelectMeal={handleSelectedMeal} />
      )}
    />
  );
}
