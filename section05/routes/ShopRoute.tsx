import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsRoute from './ProductsRoute';
import OrdersScreen from '../screens/shop/Orders';
import { Ionicons } from '@expo/vector-icons';
import theme from '../global/theme';
import UserRoute from './UserRoute';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function ShopRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: theme.colors.primary,
        headerTitleAlign: 'center',
        drawerActiveTintColor: theme.colors.primary,
      }}
    >
      <Drawer.Screen
        name='ProductsDrawer'
        component={ProductsRoute}
        options={{
          headerShown: false,
          title: 'Products',
          drawerIcon: (drawerConfig) => (
            <Ionicons name='ios-cart' size={23} color={drawerConfig.color} />
          ),
        }}
      />
      <Drawer.Screen
        name='OrdersDrawer'
        component={OrdersScreen}
        options={{
          title: 'Orders',
          drawerIcon: (drawerConfig) => (
            <Ionicons name='ios-list' size={23} color={drawerConfig.color} />
          ),
        }}
      />
      <Drawer.Screen
        name='UserDrawer'
        component={UserRoute}
        options={{
          title: 'User',
          drawerIcon: (drawerConfig) => (
            <Ionicons name='ios-create' size={23} color={drawerConfig.color} />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
