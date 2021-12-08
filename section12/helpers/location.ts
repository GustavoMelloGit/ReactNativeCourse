import * as Location from 'expo-location';

export type LocationProps = {
  lat: number;
  lng: number;
};

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

export default getLocation;
