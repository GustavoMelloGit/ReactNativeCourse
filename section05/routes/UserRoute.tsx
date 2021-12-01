import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserProductsScreen from '../screens/user/UserProducts';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import theme from '../global/theme';

const Stack = createStackNavigator();
type Props = DrawerScreenProps<RootDrawerParamList, 'UserDrawer'>;

export default function UserRoute({ navigation }: Props) {
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
        name='UserProducts'
        component={UserProductsScreen}
        options={{
          title: 'Your Products',
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
    </Stack.Navigator>
  );
}
