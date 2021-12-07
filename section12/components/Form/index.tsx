import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ButtonComponent from '../Button';
import InputComponent from '../Input';

interface IFormComponent {
  label: string[];
  buttonTitle: string;
  onSubmit: (value: string[]) => void;
}

export default function FormComponent(props: IFormComponent): JSX.Element {
  const { label, buttonTitle, onSubmit } = props;
  const [inputValue, setInputValue] = useState(['']);

  function handleInput(value: string, index: number): void {
    const newInputValue = [...inputValue];
    newInputValue[index] = value;
    setInputValue(newInputValue);
  }

  function submitHandler(): void {
    onSubmit(inputValue);
    setInputValue(['']);
  }

  const Inputs = label.map((item, index) => (
    <InputComponent
      key={index}
      label={item}
      placeholder={item}
      onChangeText={(text) => handleInput(text, index)}
      value={inputValue[index]}
    />
  ));

  return (
    <View>
      {Inputs}
      <ButtonComponent title={buttonTitle} onPress={submitHandler} />
    </View>
  );
}
