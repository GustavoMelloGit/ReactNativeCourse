import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import styles from './styles';

interface IButtonComponent extends TouchableOpacityProps {
  title: string;
}
export default function ButtonComponent(props: IButtonComponent) {
  const { title, ...rest } = props;

  return (
    <TouchableOpacity {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
