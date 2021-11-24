import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BodyText from './BodyText';

export default function MainButton(props) {
  const { title, style, onPress, color } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, ...style }}>
        <BodyText style={{ ...styles.text, color }}>{title}</BodyText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  text: {},
});
