import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};
export default function ButtonComponent(props: Props): JSX.Element {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}
