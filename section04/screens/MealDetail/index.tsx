import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import HeaderFavButton from '../../components/HeaderFavButton';
import { RootStackParamList } from '../../routes/MealsNavigation';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

export default function MealDetailScreen(props: Props): JSX.Element {
  const { navigation, route } = props;
  const { meal } = route.params;

  function handleFavItem(): void {
    console.log(meal);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderFavButton onPress={handleFavItem} />,
    });
  }, []);

  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
    </View>
  );
}
