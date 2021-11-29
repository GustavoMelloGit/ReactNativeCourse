import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealsNavigation from './MealsNavigation';
import theme from '../global/theme';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import FavouritesRoute from './FavouritesRoute';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList } from '.';

const Tab = createBottomTabNavigator();

export type DrawerProps = DrawerScreenProps<
  DrawerParamList,
  'BottomTabNavigation'
>;

export type RootBottomTabParamList = {
  Meals: undefined;
  Favourites: undefined;
};

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.accent,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='MealsRoute'
        component={MealsNavigation}
        options={{
          tabBarIcon: (props) => (
            <Ionicons name='restaurant-outline' size={24} color={props.color} />
          ),
          title: 'Meals',
        }}
      />
      <Tab.Screen
        name='FavouritesRoute'
        component={FavouritesRoute}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome name='star-o' size={24} color={props.color} />
          ),
          title: 'Favourites',
        }}
      />
    </Tab.Navigator>
  );
}
