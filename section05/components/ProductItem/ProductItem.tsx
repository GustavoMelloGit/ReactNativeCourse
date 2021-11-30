import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import theme from '../../global/theme';
import Product from '../../models/product';
import styles from './styles';

interface IProductItemProps {
  product: Product;
  onViewDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}
export default function ProductItem(props: IProductItemProps) {
  const { product, onAddToCart, onViewDetail } = props;
  let Touchable: any = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }
  return (
    <Touchable onPress={onViewDetail.bind(null, product)}>
      <View style={styles.product}>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <View style={styles.actions}>
            <Button
              title='View details'
              color={theme.colors.primary}
              onPress={onViewDetail.bind(null, product)}
            />
            <Button
              title='To cart'
              color={theme.colors.primary}
              onPress={onAddToCart.bind(null, product)}
            />
          </View>
        </View>
      </View>
    </Touchable>
  );
}
