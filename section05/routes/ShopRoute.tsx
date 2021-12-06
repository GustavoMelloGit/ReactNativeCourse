import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsRoute from './ProductsRoute';
import OrdersScreen from '../screens/shop/Orders';
import { Ionicons } from '@expo/vector-icons';
import theme from '../global/theme';
import UserRoute from './UserRoute';
import CustomDrawerContent from '../components/CustomDrawerComponent';
import { StackScreenProps } from '@react-navigation/stack';
import AuthenticationStackParamList from '../models/AuthenticationRoute';

const Drawer = createDrawerNavigator<RootDrawerParamList>();
type Props = StackScreenProps<AuthenticationStackParamList, 'shop'>;

export default function ShopRoutes(props: Props) {
  const { navigation } = props;
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: theme.colors.primary,
        headerTitleAlign: 'center',
        drawerActiveTintColor: theme.colors.primary,
      }}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} route={navigation} />
      )}
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
