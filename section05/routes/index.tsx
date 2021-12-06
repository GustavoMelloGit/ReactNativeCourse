import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationStackParamList from '../models/AuthenticationRoute';
import AuthenticationScreen from '../screens/user/Authentication';
import theme from '../global/theme';
import ShopRoutes from './ShopRoute';
import { useTypedSelector } from '../store';
import StartupScreen from '../screens/StartupScreen';

const Stack = createStackNavigator<AuthenticationStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: theme.colors.primary,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='startup'
        component={StartupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='authentication'
        component={AuthenticationScreen}
        options={{ title: 'Authentication ' }}
      />
      <Stack.Screen
        name='shop'
        component={ShopRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
