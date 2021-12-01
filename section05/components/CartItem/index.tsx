import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Product from '../../models/product';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

interface ICartItemProps {
  product: Product;
  quantity: number;
  onRemoveItem: (product: Product, quantity: number) => void;
  showRemoveButton?: boolean;
}

export default function CartItem(props: ICartItemProps): JSX.Element {
  const { product, quantity, onRemoveItem, showRemoveButton = true } = props;
  const price = product.price * quantity;

  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemData}>
        <Text style={styles.quantity}>{quantity}</Text>{' '}
        <Text style={styles.title}>{product.title}</Text>
      </Text>
      <View style={styles.priceWrapper}>
        <Text style={styles.amount}>${price.toFixed(2)}</Text>
        {showRemoveButton && (
          <TouchableOpacity
            onPress={onRemoveItem.bind(null, product, quantity)}
            style={styles.deleteButton}
          >
            <Ionicons name='ios-trash' size={24} color='red' />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
