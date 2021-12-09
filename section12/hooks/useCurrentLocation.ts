import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { LocationProps } from '../helpers/location';

async function getLocation(): Promise<LocationProps | undefined> {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    throw new Error('Location permission not granted');
  }

  try {
    let location = await Location.getCurrentPositionAsync({
      timeInterval: 5000,
    });
    return {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    };
  } catch (e) {
    throw new Error('Could not get location');
  }
}

export default function useCurrentLocation() {
  const [location, setLocation] = useState({} as LocationProps);
  const [error, setError] = useState('');

  useEffect(() => {
    getLocation()
      .then((location) => {
        if (location) {
          setLocation(location);
        }
      })
      .catch((e) => setError(e.message));
  }, []);
  return { location, error };
}
