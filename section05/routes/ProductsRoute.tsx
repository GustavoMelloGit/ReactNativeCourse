import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverview';
import theme from '../global/theme';
import { RootStackParamList } from '../models/ProductsRoute';
import ProductDetailScreen from '../screens/shop/ProductDetail';
import CartScreen from '../screens/shop/Cart';

const Stack = createStackNavigator<RootStackParamList>();

export default function ProductsRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: theme.colors.primary,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: theme.fonts.primaryBold,
        },
      }}
    >
      <Stack.Screen
        name='Products'
        component={ProductsOverviewScreen}
        options={{ title: 'All Products' }}
      />
      <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
      <Stack.Screen name='Cart' component={CartScreen} />
    </Stack.Navigator>
  );
}
