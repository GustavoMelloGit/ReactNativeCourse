import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IHeaderAddButton extends TouchableOpacityProps {
  tintColor?: string;
}

export default function HeaderAddButton(props: IHeaderAddButton) {
  const { tintColor = 'black', ...rest } = props;

  return (
    <TouchableOpacity {...rest}>
      <Ionicons
        name='ios-add'
        size={24}
        color={tintColor}
        style={{ marginRight: 10 }}
      />
    </TouchableOpacity>
  );
}
