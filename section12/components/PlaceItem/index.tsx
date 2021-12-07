import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { IPlaceModel } from '../../models/store/places/place';
import styles from './styles';

interface IPlaceItemComponent extends TouchableOpacityProps {
  place: IPlaceModel;
}

export default function PlaceItemComponent(
  props: IPlaceItemComponent
): JSX.Element {
  const { place, ...rest } = props;

  return (
    <TouchableOpacity {...rest}>
      <View>
        <Text>{place.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
