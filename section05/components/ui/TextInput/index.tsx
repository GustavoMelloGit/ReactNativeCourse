import React, { MutableRefObject, useState } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import styles from './styles';

type Props = TextInputProps & {
  label: string;
  value: string;
};

export default function TextInputComponent(props: Props): JSX.Element {
  const { label, value = '', ...rest } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} value={value} {...rest} />
    </View>
  );
}
