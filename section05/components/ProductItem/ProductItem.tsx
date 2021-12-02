import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Product from '../../models/product';
import styles from './styles';

interface IProductItemProps {
  product: Product;
  onPress: (product: Product) => void;
  children: React.ReactNode;
}
export default function ProductItem(props: IProductItemProps) {
  const { product, onPress, children } = props;
  let Touchable: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <Touchable onPress={onPress.bind(null, product)}>
      <View style={styles.product}>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <View style={styles.actions}>{children}</View>
        </View>
      </View>
    </Touchable>
  );
}
