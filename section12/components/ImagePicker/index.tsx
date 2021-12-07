import React from 'react';
import { View, Text, Image } from 'react-native';
import ButtonComponent from '../Button';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerComponent(): JSX.Element {
  function takeImageHandler(): void {
    // ImagePicker.getCameraPermissionsAsync().then((permissions) => {
    //   if (permissions.granted === false) {
    //     alert('Permission to access camera is required!');
    //     return;
    //   }
    // });

    ImagePicker.launchCameraAsync();
  }

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        <Text>No image picked yet.</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.saloodo.com/wp-content/uploads/2021/09/place-of-destination-1.png',
          }}
        />
      </View>
      <ButtonComponent title='Take Image' onPress={takeImageHandler} />
    </View>
  );
}
