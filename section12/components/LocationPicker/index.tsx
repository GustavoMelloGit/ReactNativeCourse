import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import ButtonComponent from '../Button';
import styles from './styles';
import * as Location from 'expo-location';
import MapPreviewComponent from '../MapPreview';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/routes';
import getLocation, { LocationProps } from '../../helpers/location';

interface ILocationPickerComponent {
  navigation: StackNavigationProp<RootStackParamList, 'NewPlaceScreen'>;
  selectedLocation?: LocationProps;
}

export default function LocationPickerComponent(
  props: ILocationPickerComponent
): JSX.Element {
  const { navigation, selectedLocation } = props;
  const [location, setLocation] = useState<{ lat: number; lng: number }>();

  useEffect(() => {
    const listener = navigation.addListener(
      'focus',
      setLocation.bind(null, selectedLocation)
    );
    return listener;
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      setLocation(selectedLocation);
    }
  }, []);

  async function handleGetLocation(): Promise<void> {
    try {
      const location = await getLocation();
      if (location) {
        setLocation(location);
      }
    } catch (e: any) {
      Alert.alert(e.message);
    }
  }

  function handlePickOnMap(): void {
    navigation.navigate('MapScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.locationWrapper}>
        {location ? (
          <MapPreviewComponent
            lat={location.lat}
            lng={location.lng}
            onPress={handlePickOnMap}
          />
        ) : (
          <Text>No location picked yet</Text>
        )}
      </View>
      <View style={styles.actions}>
        <ButtonComponent
          title='Get Location'
          onPress={handleGetLocation}
          style={{ alignItems: 'center' }}
        />
        <ButtonComponent
          title='Pick on Map'
          onPress={handlePickOnMap}
          style={{ alignItems: 'center' }}
        />
      </View>
    </View>
  );
}
