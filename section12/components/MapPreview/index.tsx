import React from 'react';
import { Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { API_KEY } from '../../env';
import styles from './styles';

interface IMapPreviewComponent extends TouchableOpacityProps {
  lat: number;
  lng: number;
}

export default function MapPreviewComponent(props: IMapPreviewComponent) {
  const { lat, lng, ...rest } = props;
  const imageURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${lat},${lng}&key=${API_KEY}`;
  return (
    <TouchableOpacity style={styles.touchableWrapper} {...rest}>
      <Image style={styles.image} source={{ uri: imageURL }} />
    </TouchableOpacity>
  );
}
