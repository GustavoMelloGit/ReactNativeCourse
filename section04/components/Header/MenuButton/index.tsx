import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function MenuButton({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...rest}>
      <Entypo name='menu' size={24} color='black' />
    </TouchableOpacity>
  );
}
