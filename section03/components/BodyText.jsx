import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { theme } from '../global/theme';

export default function BodyText(props) {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.Primary,
    fontSize: 16,
  },
});
