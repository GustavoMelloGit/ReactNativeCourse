import React from 'react';
import { View } from 'react-native';
import { FormComponent, ImagePickerComponent } from '../../components';
import styles from './styles';
import { handleAddPlace } from '../../store/places';
import { useTypedDispatch } from '../../store';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/routes';
import { IPlaceModel } from '../../models/store/places/place';
import { ScrollView } from 'react-native-gesture-handler';

type Props = StackScreenProps<RootStackParamList, 'NewPlaceScreen'>;

export default function NewPlaceScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const dispatch = useTypedDispatch();

  function savePlaceHandler(textValues: string[], image: string): void {
    const place: IPlaceModel = {
      id: Math.random().toString(),
      title: textValues[0],
      imageUri: image,
      address: 'Test',
      lat: 10,
      lng: 10,
    };

    dispatch(handleAddPlace(place));
    navigation.goBack();
  }

  return (
    <ScrollView>
      <View style={styles.formWrapper}>
        <FormComponent
          buttonTitle='Submit'
          label={['Title']}
          onSubmit={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
}
