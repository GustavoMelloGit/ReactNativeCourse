import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import theme from '../../../global/theme';
import styles from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color?: string;
};
export default function ButtonComponent(props: Props): JSX.Element {
  const { color = theme.colors.primary, title } = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={{ ...styles.title, color: color }}>{title}</Text>
    </TouchableOpacity>
  );
}
