import React from 'react';
import { View, Text } from 'react-native';
import Category from '../../models/category';
import Touchable from '../ui/Touchable';
import { styles } from './styles';

interface Props {
  item: Category;
  onPress: () => void;
}
export default function CategoryItem(props: Props): JSX.Element {
  const { item, onPress } = props;
  return (
    <Touchable onPress={onPress.bind(null, item)}>
      <View style={{ ...styles.gridItem, backgroundColor: item.color }}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    </Touchable>
  );
}
