import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/MealsNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Categories'>;

export default function CategoriesScreen({
  route,
  navigation,
}: Props): JSX.Element {
  function handleGoToMeals(): void {
    navigation.navigate('CategoryMeals');
  }

  return (
    <View style={styles.screen}>
      <Text>CategoriesScreen</Text>
      <Button title='Go to Meals' onPress={handleGoToMeals} />
    </View>
  );
}
