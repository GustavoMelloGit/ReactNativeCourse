import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

interface IHeaderSaveButtonProps extends TouchableOpacityProps {
  color?: string;
}
export default function HeaderSaveButton(props: IHeaderSaveButtonProps) {
  const { color = 'black', ...rest } = props;
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Feather name='save' size={24} color={color} />
    </TouchableOpacity>
  );
}
