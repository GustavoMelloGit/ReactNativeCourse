import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import FiltersScreen from '../screens/Filters';
import { headerStyles } from './styles';

const Drawer = createDrawerNavigator();

export type DrawerParamList = {
  BottomTabNavigation: undefined;
  Filter: { save: () => void };
};

export default function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='MealsDrawerNavigation'
        component={BottomTabNavigation}
        options={{ title: 'Meals', headerShown: false }}
      />
      <Drawer.Screen
        name='Filter'
        component={FiltersScreen}
        options={{
          headerTitleStyle: headerStyles.title,
          headerTitleAlign: 'center',
        }}
      />
    </Drawer.Navigator>
  );
}
