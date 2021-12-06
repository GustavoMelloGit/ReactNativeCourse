import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import theme from '../../global/theme';
import styles from './styles';

export default function LoadingSpinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={theme.colors.primary} />
    </View>
  );
}
