import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverview';
import theme from '../global/theme';
import { RootStackParamList } from '../models/ProductsRoute';
import ProductDetailScreen from '../screens/shop/ProductDetail';
import CartScreen from '../screens/shop/Cart';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator<RootStackParamList>();
type Props = DrawerScreenProps<RootDrawerParamList, 'ProductsDrawer'>;

export default function ProductsRoute(props: Props) {
  const { navigation } = props;
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
        options={{
          title: 'All Products',
          headerLeft: () => (
            <Feather
              name='menu'
              size={24}
              color={theme.colors.primary}
              onPress={() => {
                navigation.toggleDrawer();
              }}
              style={{ marginLeft: 15 }}
            />
          ),
        }}
      />
      <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
      <Stack.Screen name='Cart' component={CartScreen} />
    </Stack.Navigator>
  );
}
