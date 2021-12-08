import React, { useEffect, useLayoutEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/routes';
import { useTypedDispatch, useTypedSelector } from '../../store';
import { FlatList } from 'react-native-gesture-handler';
import { PlaceItemComponent, HeaderAddButton } from '../../components';
import { IPlaceModel } from '../../models/store/places/place';
import { loadPlaces } from '../../store/places';

type PlaceListScreenProps = StackScreenProps<
  RootStackParamList,
  'PlaceListScreen'
>;

export default function PlaceListScreen(props: PlaceListScreenProps) {
  const { navigation } = props;
  const reduxPlaces = useTypedSelector((state) => state.places.places);
  const status = useTypedSelector((state) => state.places.status);
  const dispatch = useTypedDispatch();

  function handleAddPlace() {
    navigation.navigate('NewPlaceScreen');
  }

  function handleGoToPlaceDetail(place: IPlaceModel) {
    navigation.navigate('PlaceDetailScreen', { place });
  }

  async function fetchPlaces() {
    try {
      await dispatch(loadPlaces());
    } catch (e: any) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    const listener = navigation.addListener('focus', fetchPlaces);
    return listener;
  }, [fetchPlaces]);

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
      onRefresh={fetchPlaces}
      refreshing={status !== 'idle'}
    />
  );
}
