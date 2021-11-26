import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Touchable from '../../ui/Touchable';

interface Props {
  onPress: () => void;
}
export default function HeaderFavButton({ onPress }: Props): JSX.Element {
  return (
    <Touchable onPress={onPress}>
      <FontAwesome name='star-o' size={24} color='black' />
    </Touchable>
  );
}
