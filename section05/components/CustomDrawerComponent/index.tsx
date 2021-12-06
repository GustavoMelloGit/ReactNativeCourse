import {
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import AuthenticationStackParamList from '../../models/AuthenticationRoute';
import { logOut } from '../../store/auth';
import ButtonComponent from '../ui/Button';

type ICustomDrawerContent = DrawerContentComponentProps & {
  route: StackNavigationProp<AuthenticationStackParamList, 'shop'>;
};

export default function CustomDrawerContent(props: ICustomDrawerContent) {
  const dispatch = useDispatch();
  const { route } = props;

  function handleLogout() {
    dispatch(logOut());
    route.replace('authentication');
  }

  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <SafeAreaView>
        <DrawerItemList {...props} />
        <ButtonComponent title='Logout' onPress={handleLogout} />
      </SafeAreaView>
    </View>
  );
}
