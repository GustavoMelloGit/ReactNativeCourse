import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/Categories';
import CategoryMealScreen from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetail';

export type RootStackParamList = {
  Categories: undefined;
  CategoryMeals: undefined;
  MealDetail: { mealId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MealsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Categories' component={CategoriesScreen} />
      <Stack.Screen name='CategoryMeals' component={CategoryMealScreen} />
      <Stack.Screen name='MealDetail' component={MealDetailScreen} />
    </Stack.Navigator>
  );
}
