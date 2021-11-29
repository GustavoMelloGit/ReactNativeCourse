import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Meal from '../models/meal';
import FavouritesScreen from '../screens/Favourites';
import MealDetailScreen from '../screens/MealDetail';
import { headerStyles } from './styles';
import MenuButton from '../components/Header/MenuButton';
import { DrawerProps } from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

export type FavouritesStackParamList = {
  Favourites: undefined;
  MealDetail: { meal: Meal };
};

export default function FavouritesRoute({
  navigation,
}: DrawerProps): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: headerStyles.title,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='Favorites'
        component={FavouritesScreen}
        options={{
          headerLeft: () => (
            <MenuButton onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
      <Stack.Screen name='MealDetail' component={MealDetailScreen} />
    </Stack.Navigator>
  );
}
