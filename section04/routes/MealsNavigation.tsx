import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Category from '../models/category';
import Meal from '../models/meal';

import CategoriesScreen from '../screens/Categories';
import CategoryMealScreen from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetail';
import { headerStyles } from './styles';
import MenuButton from '../components/Header/MenuButton';
import { DrawerProps } from './BottomTabNavigation';

export type RootStackParamList = {
  Categories: undefined;
  CategoryMeals: { category: Category };
  MealDetail: { meal: Meal };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MealsNavigation({ navigation }: DrawerProps) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: headerStyles.title,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'Meal Categories',
          headerLeft: () => (
            <MenuButton onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
      <Stack.Screen name='CategoryMeals' component={CategoryMealScreen} />
      <Stack.Screen name='MealDetail' component={MealDetailScreen} />
    </Stack.Navigator>
  );
}
