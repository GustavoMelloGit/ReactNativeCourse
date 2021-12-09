import { StackScreenProps } from '@react-navigation/stack';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { ActivityIndicator, View } from 'react-native';
import MapView, { MapEvent, Marker, Region } from 'react-native-maps';
import { HeaderSaveButton } from '../../components';
import { LocationProps } from '../../helpers/location';
import useCurrentLocation from '../../hooks/useCurrentLocation';
import { RootStackParamList } from '../../models/routes';
import styles from './styles';

type MapScreenProps = StackScreenProps<RootStackParamList, 'MapScreen'>;

export default function MapScreen(props: MapScreenProps): JSX.Element {
  const { navigation } = props;
  const { location, error } = useCurrentLocation();
  const [selectedLocation, setSelectedLocation] =
    useState<LocationProps>(location);
  const [mapRegion, setMapRegion] = useState<Region>();

  const handleSavePlace = useCallback(() => {
    navigation.navigate('NewPlaceScreen', { ...selectedLocation });
  }, [selectedLocation]);

  function handleSelectLocation(event: MapEvent): void {
    const locationClicked: LocationProps = {
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    };
    setSelectedLocation(locationClicked);
  }

  useEffect(() => {
    if (!!Object.keys(location).length) {
      setMapRegion({
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      });
      setSelectedLocation(location);
    }
  }, [location]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => (
        <HeaderSaveButton color={props.tintColor} onPress={handleSavePlace} />
      ),
    });
  }, [navigation, handleSavePlace]);

  if (!!!Object.keys(selectedLocation).length || !mapRegion) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color='#888' />
      </View>
    );
  }

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
