import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HeaderFavButton from '../../components/Header/HeaderFavButton';
import { RootState } from '../../models/store';
import { RootStackParamList } from '../../routes/MealsNavigation';
import { toggleFavourite } from '../../store/actions/meals';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

export default function MealDetailScreen(props: Props): JSX.Element {
  const { navigation, route } = props;
  const { meal } = route.params;

  const favoriteMeals = useSelector(
    (state: RootState) => state.meals.favouriteMeals
  );
  const selectedMeal = Boolean(
    favoriteMeals.find((item) => item.id === meal.id)
  );
  const [favorite, setFavorite] = useState(selectedMeal);
  const dispatch = useDispatch();

  function handleFavItem(): void {
    dispatch(toggleFavourite(meal.id));
    setFavorite((prev) => !prev);
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderFavButton selected={favorite} onPress={handleFavItem} />
      ),
      title: meal.title,
    });
  }, [favorite]);

  const ingredients = meal.ingredients.map(
    (ingredient: string, index: number) => (
      <View key={index} style={styles.infoWrapper}>
        <Text style={styles.textContent}>{ingredient}</Text>
      </View>
    )
  );
  const steps = meal.steps.map((step: string, index: number) => (
    <View key={index} style={styles.infoWrapper}>
      <Text style={styles.textContent}>{step}</Text>
    </View>
  ));

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.textContent}>{meal.duration}m</Text>
        <Text style={styles.textContent}>{meal.complexity.toUpperCase()}</Text>
        <Text style={styles.textContent}>
          {meal.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={styles.screen}>
        <Text style={styles.title}>Ingredients</Text>
        {ingredients}
        <Text style={styles.title}>Steps</Text>
        {steps}
      </View>
    </ScrollView>
  );
}
