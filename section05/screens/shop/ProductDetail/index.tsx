import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView, Image, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../models/ProductsRoute';
import styles from './styles';
import theme from '../../../global/theme';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cart';

type Props = StackScreenProps<RootStackParamList, 'ProductDetail'>;

export default function ProductDetailScreen(props: Props): JSX.Element {
  const { route, navigation } = props;
  const { product } = route.params;
  const dispatch = useDispatch();

  const formattedPrice = product.price.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: product.title,
    });
  }, []);

  const handleAddToCart = (): void => {
    dispatch(addToCart(product));
  };

  return (
    <ScrollView>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.addToCart}>
        <Button
          color={theme.colors.primary}
          title='Add to cart'
          onPress={handleAddToCart}
        />
      </View>
      <Text style={styles.price}>${formattedPrice}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
}
