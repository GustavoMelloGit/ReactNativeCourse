import React from 'react';
import { FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/MealsNavigation';
import { CATEGORIES } from '../../data/dummy-data';
import Category from '../../models/category';

import CategoryItem from '../../components/CategoryItem';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Categories'>;

export default function CategoriesScreen(props: Props): JSX.Element {
  const { navigation } = props;

  const handleGoToMeals = (item: Category): void => {
    navigation.navigate('CategoryMeals', { category: item });
  };

  const renderItemData = ({ item }: { item: Category }): JSX.Element => {
    return (
      <CategoryItem item={item} onPress={handleGoToMeals.bind(null, item)} />
    );
  };

  return (
    <FlatList
      numColumns={2}
      contentContainerStyle={styles.containerItem}
      renderItem={renderItemData}
      data={CATEGORIES}
    />
  );
}
