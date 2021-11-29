import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SaveButton({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...rest} style={{ marginRight: 15 }}>
      <Feather name='save' size={24} color='black' />
    </TouchableOpacity>
  );
}
