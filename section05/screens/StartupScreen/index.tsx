import React, { useEffect } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackScreenProps } from '@react-navigation/stack';
import AuthenticationStackParamList from '../../models/AuthenticationRoute';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../store/auth';
import { IUser } from '../../models/auth';

type Props = StackScreenProps<AuthenticationStackParamList, 'startup'>;

export default function StartupScreen(props: Props) {
  const { navigation } = props;
  const dispatch = useDispatch();

  const tryLogin = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (!userData) {
      navigation.replace('authentication');
      return;
    }
    const transformedData = JSON.parse(userData);
    const { expirationDate, user }: { expirationDate: string; user: IUser } =
      transformedData;
    const { idToken, localId } = user;

    const expiration = new Date(expirationDate);

    if (expiration <= new Date() || !idToken || !localId) {
      navigation.replace('authentication');
      return;
    }
    dispatch(authenticate(user));
    navigation.navigate('shop');
  };

  useEffect(() => {
    tryLogin();
  }, []);
  return <LoadingSpinner />;
}
