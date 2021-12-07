import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { ButtonComponent } from '..';
import styles from './styles';
import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';

export default function LocationPickerComponent(): JSX.Element {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [location, setLocation] = useState<{ lat: number; lng: number }>();

  async function handleGetLocation(): Promise<void> {
    setIsFetching(true);
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
      setIsFetching(false);
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({
        timeInterval: 5000,
      });
      setLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (e) {
      Alert.alert('Can not get location');
    }

    setIsFetching(false);
    return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.locationWrapper}>
        {isFetching ? (
          <ActivityIndicator size='large' />
        ) : (
          <Text>No location picked yet</Text>
        )}
      </View>
      <ButtonComponent
        title='Get Location'
        onPress={handleGetLocation}
        style={{ alignItems: 'center' }}
      />
    </View>
  );
}
