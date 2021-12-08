import { StackScreenProps } from '@react-navigation/stack';
import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import MapPreviewComponent from '../../components/MapPreview';
import { RootStackParamList } from '../../models/routes';
import styles from './styles';

type PlaceDetailScreenProps = StackScreenProps<
  RootStackParamList,
  'PlaceDetailScreen'
>;

export default function PlaceDetailScreen(props: PlaceDetailScreenProps) {
  const { route, navigation } = props;
  const { place } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: place.title,
    });
  }, []);

  return (
    <ScrollView>
      <Image source={{ uri: place.imageUri }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>{place.title}</Text>
        <View style={styles.mapPreviewWrapper}>
          <MapPreviewComponent lat={place.lat} lng={place.lng} />
        </View>
      </View>
    </ScrollView>
  );
}
