import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  MapScreen,
  NewPlaceScreen,
  PlaceDetailScreen,
  PlaceListScreen,
} from '../screens';
import { RootStackParamList } from '../models/routes';
import theme from '../global/theme';

const Stack = createStackNavigator<RootStackParamList>();
export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: theme.color.primary,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='PlaceListScreen'
        component={PlaceListScreen}
        options={{ title: 'All Places' }}
      />
      <Stack.Screen name='PlaceDetailScreen' component={PlaceDetailScreen} />
      <Stack.Screen name='NewPlaceScreen' component={NewPlaceScreen} />
      <Stack.Screen name='MapScreen' component={MapScreen} />
    </Stack.Navigator>
  );
}
