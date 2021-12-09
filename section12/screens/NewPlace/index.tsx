import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { FormComponent } from '../../components';
import styles from './styles';
import { handleAddPlace } from '../../store/places';
import { useTypedDispatch } from '../../store';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/routes';
import { IPlaceModel } from '../../models/store/places/place';
import { ScrollView } from 'react-native-gesture-handler';
import { LocationProps } from '../../helpers/location';

type Props = StackScreenProps<RootStackParamList, 'NewPlaceScreen'>;

export default function NewPlaceScreen(props: Props): JSX.Element {
  const { navigation, route } = props;
  const { params } = route;
  const [selectedLocation, setSelectedLocation] = useState<
    LocationProps | undefined
  >(params);
  const dispatch = useTypedDispatch();

  function savePlaceHandler(textValues: string[], image: string): void {
    if (textValues.length === 0 || image === '') {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    const place: IPlaceModel = {
      id: Math.random().toString(),
      title: textValues[0],
      imageUri: image,
      address: 'Test',
      lat: 10,
      lng: 20,
    };

    dispatch(handleAddPlace(place));
    navigation.navigate('PlaceListScreen');
  }

  useEffect(() => {
    if (params) {
      setSelectedLocation(params);
    }
  }, []);

  return (
    <ScrollView>
      <View style={styles.formWrapper}>
        <FormComponent
          buttonTitle='Submit'
          label={['Title']}
          onSubmit={savePlaceHandler}
          navigation={navigation}
          selectedLocation={selectedLocation}
        />
      </View>
    </ScrollView>
  );
}
