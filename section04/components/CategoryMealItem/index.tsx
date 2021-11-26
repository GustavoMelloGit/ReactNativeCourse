import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Meal from '../../models/meal';
import Touchable from '../ui/Touchable';
import styles from './styles';

interface Props {
  item: Meal;
  onSelectMeal: (item: Meal) => void;
}
export default function CategoryMealItem({ item, onSelectMeal }: Props) {
  return (
    <Touchable onPress={onSelectMeal.bind(null, item)}>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: item.imageUrl }}
          style={{ width: '100%', height: 140 }}
        >
          <View>
            <Text style={styles.header} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.content}>
          <Text style={styles.textContent}>{item.duration}m</Text>
          <Text style={styles.textContent}>
            {item.complexity.toUpperCase()}
          </Text>
          <Text style={styles.textContent}>
            {item.affordability.toUpperCase()}
          </Text>
        </View>
      </View>
    </Touchable>
  );
}
