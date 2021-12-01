import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsRoute from './ProductsRoute';
import OrdersScreen from '../screens/shop/Orders';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function Routes() {
  return (
    <Drawer.Navigator>
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
    </Drawer.Navigator>
  );
}
