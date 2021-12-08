import { StackScreenProps } from '@react-navigation/stack';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { Alert } from 'react-native';
import MapView, { MapEvent, Marker, Region } from 'react-native-maps';
import { HeaderSaveButton } from '../../components';
import getLocation, { LocationProps } from '../../helpers/location';
import { RootStackParamList } from '../../models/routes';
import styles from './styles';

type MapScreenProps = StackScreenProps<RootStackParamList, 'MapScreen'>;

export default function MapScreen(props: MapScreenProps): JSX.Element {
  const { navigation } = props;
  const [selectedLocation, setSelectedLocation] = useState<LocationProps>();
  const [mapRegion, setMapRegion] = useState<Region>();

  const fetchCurrentPosition = useCallback(async () => {
    try {
      const result = await getLocation();
      if (result) {
        setSelectedLocation(result);
        setMapRegion({
          latitude: result.lat,
          longitude: result.lng,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221,
        });
      }
    } catch (e: any) {
      console.log(e);
    }
  }, [setSelectedLocation, setMapRegion]);

  const handleSavePlace = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert('No location selected');
      return;
    }
    navigation.navigate('NewPlaceScreen', selectedLocation);
  }, [selectedLocation]);

  function handleSelectLocation(event: MapEvent): void {
    const location: LocationProps = {
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    };
    setSelectedLocation(location);
  }

  useEffect(() => {
    const listener = navigation.addListener('focus', fetchCurrentPosition);
    return listener;
  }, [navigation, fetchCurrentPosition]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => (
        <HeaderSaveButton color={props.tintColor} onPress={handleSavePlace} />
      ),
    });
  }, []);

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={handleSelectLocation}
    >
      {selectedLocation && (
        <Marker
          title='Picked Location'
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}
