import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { LocationProps } from '../../helpers/location';
import { RootStackParamList } from '../../models/routes';
import ImagePickerComponent from '../ImagePicker';
import InputComponent from '../Input';
import LocationPickerComponent from '../LocationPicker';

interface IFormComponent {
  label: string[];
  buttonTitle: string;
  onSubmit: (value: string[], image: string) => void;
  navigation: StackNavigationProp<RootStackParamList, 'NewPlaceScreen'>;
  selectedLocation?: LocationProps;
}

export default function FormComponent(props: IFormComponent): JSX.Element {
  const { label, buttonTitle, selectedLocation, navigation, onSubmit } = props;
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
      <LocationPickerComponent
        navigation={navigation}
        selectedLocation={selectedLocation}
      />
      <View style={{ marginTop: 10 }}>
        <Button title={buttonTitle} onPress={submitHandler} />
      </View>
    </View>
  );
}
