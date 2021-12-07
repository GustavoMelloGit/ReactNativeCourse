import { StackScreenProps } from '@react-navigation/stack';
import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../../models/routes';

type PlaceDetailScreenProps = StackScreenProps<
  RootStackParamList,
  'PlaceDetailScreen'
>;

export default function PlaceDetailScreen(props: PlaceDetailScreenProps) {
  const { route, navigation } = props;
  const { place } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: place.title,
    });
  }, []);

  return (
    <View>
      <Text></Text>
    </View>
  );
}
