import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../global/theme';

export default function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: theme.accent,
    padding: 8,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: theme.accent,
    fontSize: 22,
  },
});
