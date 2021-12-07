import React, { useLayoutEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/routes';
import { useTypedSelector } from '../../store';
import { FlatList } from 'react-native-gesture-handler';
import { PlaceItemComponent, HeaderAddButton } from '../../components';
import { IPlaceModel } from '../../models/store/places/place';

type PlaceListScreenProps = StackScreenProps<
  RootStackParamList,
  'PlaceListScreen'
>;

export default function PlaceListScreen(props: PlaceListScreenProps) {
  const { navigation } = props;
  const reduxPlaces = useTypedSelector((state) => state.places.places);

  function handleAddPlace() {
    navigation.navigate('NewPlaceScreen');
  }
  function handleGoToPlaceDetail(place: IPlaceModel) {
    navigation.navigate('PlaceDetailScreen', { place });
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => (
        <HeaderAddButton tintColor={props.tintColor} onPress={handleAddPlace} />
      ),
    });
  }, []);

  return (
    <FlatList
      data={reduxPlaces}
      renderItem={({ item }) => (
        <PlaceItemComponent
          place={item}
          onPress={handleGoToPlaceDetail.bind(null, item)}
        />
      )}
    />
  );
}
