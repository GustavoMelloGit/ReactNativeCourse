import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { RootState } from '../../../store';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { RootStackParamList } from '../../../models/ProductsRoute';
import { StackScreenProps } from '@react-navigation/stack';
import Product from '../../../models/product';
import { addToCart } from '../../../store/cart';
import CartHeaderButton from '../../../components/ui/CartHeaderButton';

type Props = StackScreenProps<RootStackParamList, 'ProductDetail'>;

export default function ProductsOverviewScreen({
  navigation,
}: Props): JSX.Element {
  const prod = useSelector(
    (state: RootState) => state.products.availableProducts
  );
  const dispatch = useDispatch();

  function handleAddToCart(product: Product): void {
    dispatch(addToCart(product));
  }
  function handleViewDetail(product: Product): void {
    navigation.navigate('ProductDetail', { product });
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CartHeaderButton onPress={() => navigation.navigate('Cart')} />
      ),
    });
  }, []);
  return (
    <FlatList
      data={prod}
      renderItem={({ item }) => (
        <ProductItem
          product={item}
          onAddToCart={handleAddToCart}
          onViewDetail={handleViewDetail}
        />
      )}
    />
  );
}
