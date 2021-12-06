import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/routes';
import { Ionicons } from '@expo/vector-icons';
import { HeaderAddButton } from '../../components/HeaderButtons';

type PlaceListScreenProps = StackScreenProps<
  RootStackParamList,
  'PlaceListScreen'
>;

export default function PlaceListScreen(props: PlaceListScreenProps) {
  const { navigation } = props;

  function handleAddPlace() {
    navigation.navigate('NewPlaceScreen');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => (
        <HeaderAddButton tintColor={props.tintColor} onPress={handleAddPlace} />
      ),
    });
  }, []);

  return (
    <View>
      <Text></Text>
    </View>
  );
}
