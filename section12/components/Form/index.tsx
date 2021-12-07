import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import ButtonComponent from '../Button';
import ImagePickerComponent from '../ImagePicker';
import InputComponent from '../Input';
import LocationPickerComponent from '../LocationPicker';

interface IFormComponent {
  label: string[];
  buttonTitle: string;
  onSubmit: (value: string[], image: string) => void;
}

export default function FormComponent(props: IFormComponent): JSX.Element {
  const { label, buttonTitle, onSubmit } = props;
  const [inputValue, setInputValue] = useState<string[]>(['']);
  const [imagePicked, setImagePicked] = useState<string>('');

  function handleInput(value: string, index: number): void {
    const newInputValue = [...inputValue];
    newInputValue[index] = value;
    setInputValue(newInputValue);
  }

  function submitHandler(): void {
    onSubmit(inputValue, imagePicked);
    setInputValue(['']);
  }
  function handleImagePicked(image: string): void {
    setImagePicked(image);
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
      <ImagePickerComponent onImagePicked={handleImagePicked} />
      <LocationPickerComponent />
      <View style={{ marginTop: 10 }}>
        <Button title={buttonTitle} onPress={submitHandler} />
      </View>
    </View>
  );
}
