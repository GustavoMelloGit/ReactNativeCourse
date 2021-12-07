import React from 'react';
import { View } from 'react-native';
import { FormComponent, ImagePickerComponent } from '../../components';
import styles from './styles';
import { addPlace } from '../../store/places';
import { useTypedDispatch } from '../../store';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/routes';

type Props = StackScreenProps<RootStackParamList, 'NewPlaceScreen'>;

export default function NewPlaceScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const dispatch = useTypedDispatch();

  function savePlaceHandler(textValues: string[]): void {
    dispatch(addPlace(textValues[0]));
    navigation.goBack();
  }

  return (
    <View style={styles.formWrapper}>
      <FormComponent
        buttonTitle='Submit'
        label={['Title']}
        onSubmit={savePlaceHandler}
      />
      <ImagePickerComponent />
    </View>
  );
}
