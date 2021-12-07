import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import ButtonComponent from '../Button';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';

interface IImagePickerComponent {
  onImagePicked: (image: string) => void;
}

export default function ImagePickerComponent(
  props: IImagePickerComponent
): JSX.Element {
  const [pickedImage, setPickedImage] = useState('');
  const { onImagePicked } = props;

  async function takeImageHandler() {
    const permissions = await ImagePicker.getCameraPermissionsAsync();
    if (permissions.granted === false) {
      alert('Permission to access camera is required!');
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (!image.cancelled) {
      setPickedImage(image.uri);
      onImagePicked(image.uri);
    }
    return;
  }

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!!pickedImage ? (
          <Image
            style={styles.image}
            source={{
              uri: pickedImage,
            }}
          />
        ) : (
          <Text>No image picked yet.</Text>
        )}
      </View>
      <ButtonComponent title='Take Image' onPress={takeImageHandler} />
    </View>
  );
}
