import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

export type DrawerParamList = {
  BottomTabNavigation: undefined;
  Filter: undefined;
};

export default function Routes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name='MealsDrawerNavigation'
        component={BottomTabNavigation}
        options={{ title: 'Meals' }}
      />
    </Drawer.Navigator>
  );
}
