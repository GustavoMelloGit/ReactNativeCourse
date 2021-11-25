import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import Category from '../../models/category';
import { styles } from './styles';

interface Props {
  item: Category;
  onPress: () => void;
}
export default function CategoryItem(props: Props): JSX.Element {
  const { item, onPress } = props;
  let Touchable: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

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
