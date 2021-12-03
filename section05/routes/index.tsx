import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationStackParamList from '../models/AuthenticationRoute';
import AuthenticationScreen from '../screens/user/Authentication';
import theme from '../global/theme';

const Stack = createStackNavigator<AuthenticationStackParamList>();

export default function ShopRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: theme.colors.primary,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='authentication'
        component={AuthenticationScreen}
        options={{ title: 'Authentication ' }}
      />
      <Stack.Screen name='shop' component={ShopRoutes} />
    </Stack.Navigator>
  );
}
