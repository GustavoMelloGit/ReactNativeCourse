import React from 'react';
import { View, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { RootState } from '../../../store';
import styles from './styles';

export default function CartScreen(): JSX.Element {
  const cart = useSelector((state: RootState) => state.cart);
  const { items, totalAmount } = cart;
  const products = items.map((item) => item.product);

  const formattedTotalAmount = totalAmount.toLocaleString('en-US', {
    currency: 'USD',
    style: 'currency',
  });
  return (
    <View>
      <View style={styles.priceWrapper}>
        <View style={styles.priceWrapper__inner}>
          <Text style={styles.priceText}>
            Total: <Text>${formattedTotalAmount}</Text>
          </Text>
          <Button title='Order now' onPress={() => {}} />
        </View>
      </View>
      <View>
        <Text>Cart items</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              onAddToCart={() => {}}
              onViewDetail={() => {}}
            />
          )}
        />
      </View>
    </View>
  );
}
