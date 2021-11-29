import React, { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Touchable from '../../ui/Touchable';
import { useSelector } from 'react-redux';
import { RootState } from '../../../models/store';

interface Props {
  onPress: () => void;
  selected: boolean;
}
export default function HeaderFavButton({
  onPress,
  selected,
}: Props): JSX.Element {
  return (
    <Touchable onPress={onPress}>
      {selected ? (
        <FontAwesome name='star' size={24} color='yellow' />
      ) : (
        <FontAwesome name='star-o' size={24} color='black' />
      )}
    </Touchable>
  );
}
