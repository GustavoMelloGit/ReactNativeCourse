import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Category from '../models/category';
import theme from '../global/theme';

import CategoriesScreen from '../screens/Categories';
import CategoryMealScreen from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetail';

export type RootStackParamList = {
  Categories: undefined;
  CategoryMeals: { category: Category };
  MealDetail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const headerStyle = StyleSheet.create({
  title: {
    color: theme.colors.primary,
  },
});

export default function MealsNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: headerStyle.title,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'Meal Categories',
        }}
      />
      <Stack.Screen name='CategoryMeals' component={CategoryMealScreen} />
      <Stack.Screen name='MealDetail' component={MealDetailScreen} />
    </Stack.Navigator>
  );
}
