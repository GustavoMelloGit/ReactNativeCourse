import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/MealsNavigation';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'CategoryMeals'>;

export default function CategoryMealScreen(props: Props): JSX.Element {
  const { route, navigation } = props;

  useEffect(() => {
    navigation.setOptions({ title: route.params.category.title });
  }, []);

  function handleGoToMealDetail(): void {
    navigation.navigate('MealDetail');
  }

  return (
    <View style={styles.screen}>
      <Text>Category Meals</Text>
      <Button title='Go to meal detail' onPress={handleGoToMealDetail} />
    </View>
  );
}
