import React from 'react';
import { FlatList } from 'react-native';
import Meal from '../../models/meal';
import CategoryMealItem from '../CategoryMealItem';

interface Props {
  meals: Meal[];
  onSelectMeal: (item: Meal) => void;
}
export default function MealList(props: Props) {
  const { meals, onSelectMeal } = props;
  return (
    <FlatList
      data={meals}
      contentContainerStyle={{ alignItems: 'center' }}
      renderItem={(item) => (
        <CategoryMealItem item={item.item} onSelectMeal={onSelectMeal} />
      )}
    />
  );
}
