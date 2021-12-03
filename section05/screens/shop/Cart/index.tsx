import React from 'react';
import { View, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../../../components/CartItem';
import Product from '../../../models/product';
import { IOrder } from '../../../models/store';
import { RootState } from '../../../store';
import { cleanCart, removeFromCart } from '../../../store/cart';
import { addOrder } from '../../../store/orders';
import styles from './styles';

export default function CartScreen(): JSX.Element {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const { items, totalAmount } = cart;
  const products = items.map((item) => item.product);

  const handleRemoveFromCart = (product: Product, quantity: number) => {
    dispatch(removeFromCart({ product, quantity }));
  };

  const handleOrderNow = () => {
    dispatch(addOrder(cart));
    dispatch(cleanCart());
  };

  const formattedTotalAmount = totalAmount.toFixed(2);
  return (
    <View style={styles.container}>
      <View style={styles.priceWrapper}>
        <Text style={styles.totalText}>
          Total: <Text style={styles.priceText}>${formattedTotalAmount}</Text>
        </Text>
        <Button
          title='Order now'
          onPress={handleOrderNow}
          disabled={products.length === 0}
        />
      </View>
      <View>
        <Text style={styles.cartItemsTitle}>Cart items:</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item.product.id}
          renderItem={({ item }) => (
            <CartItem
              product={item.product}
              quantity={item.quantity}
              onRemoveItem={handleRemoveFromCart}
            />
          )}
          contentContainerStyle={styles.productList}
        />
      </View>
    </View>
  );
}
