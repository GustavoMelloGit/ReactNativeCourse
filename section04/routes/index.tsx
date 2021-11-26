import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealsNavigation from './MealsNavigation';
import FavouritesScreen from '../screens/Favourites';
import theme from '../global/theme';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const headerStyle = StyleSheet.create({
  title: {
    color: theme.colors.primary,
  },
});

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: headerStyle.title,
        headerTitleAlign: 'center',
        tabBarActiveTintColor: theme.colors.accent,
      }}
    >
      <Tab.Screen
        name='Meals'
        component={MealsNavigation}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <Ionicons name='restaurant-outline' size={24} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name='Favourites'
        component={FavouritesScreen}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome name='star-o' size={24} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
