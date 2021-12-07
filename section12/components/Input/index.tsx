import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import styles from './styles';

interface IInputComponent extends TextInputProps {
  label?: string;
}
export default function InputComponent(props: IInputComponent): JSX.Element {
  const { label, ...rest } = props;

  return (
    <View>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} {...rest} />
    </View>
  );
}
