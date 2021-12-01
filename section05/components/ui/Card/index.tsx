import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Props = {
  children: React.ReactNode;
};
export default function Card({ children }: Props): JSX.Element {
  return <View style={styles.container}>{children}</View>;
}
