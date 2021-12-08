import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import MapView, { MapEvent, Marker, Region } from 'react-native-maps';
import { HeaderSaveButton } from '../../components/HeaderButtons';
import getLocation from '../../helpers/location';
import { RootStackParamList } from '../../models/routes';
import styles from './styles';

type MapScreenProps = StackScreenProps<RootStackParamList, 'MapScreen'>;

export default function MapScreen(props: MapScreenProps) {
  const { navigation } = props;
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  }>();
  const [mapRegion, setMapRegion] = useState<Region>();

  useEffect(() => {
    getLocation()
      .then((location) => {
        if (location) {
          setSelectedLocation(location);
          setMapRegion({
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221,
          });
        }
      })
      .catch((e) => console.log(e));
  }, []);

  function handleSelectLocation(event: MapEvent) {
    const location = {
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    };
    setSelectedLocation(location);
  }

  function handleSavePlace() {
    if (selectedLocation) {
      navigation.replace('NewPlaceScreen', selectedLocation);
    }
  }

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
        ></Marker>
      )}
    </MapView>
  );
}
