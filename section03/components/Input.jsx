import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input(props) {
  const { style, ...rest } = props;
  return <TextInput {...rest} style={{ ...styles.textInput, ...style }} />;
}

const styles = StyleSheet.create({
  textInput: {
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
