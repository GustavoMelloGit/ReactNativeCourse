import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../global/theme';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 18,
  },
});
