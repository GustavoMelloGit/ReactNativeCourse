import React, { useCallback, useEffect } from 'react';
import { FlatList, ActivityIndicator, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { RootStackParamList } from '../../../models/ProductsRoute';
import { StackScreenProps } from '@react-navigation/stack';
import Product from '../../../models/product';
import { addToCart } from '../../../store/cart';
import CartHeaderButton from '../../../components/ui/CartHeaderButton';
import ButtonComponent from '../../../components/ui/Button';
import { fetchProductsFromServer } from '../../../store/products';
import { styles } from './styles';

type Props = StackScreenProps<RootStackParamList, 'ProductDetail'>;

export default function ProductsOverviewScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const prod = useSelector(
    (state: RootState) => state.products.availableProducts
  );
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.products.status);

  function handleAddToCart(product: Product): void {
    dispatch(addToCart(product));
  }
  function handleViewDetail(product: Product): void {
    navigation.navigate('ProductDetail', { product });
  }

  const loadProducts = useCallback(async () => {
    dispatch(fetchProductsFromServer());
  }, [dispatch, fetchProductsFromServer]);

  useEffect(() => {
    const listener = navigation.addListener('focus', loadProducts);
    return listener;
  }, [loadProducts]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CartHeaderButton onPress={() => navigation.navigate('Cart')} />
      ),
    });
    loadProducts();
  }, [dispatch, navigation]);

  if (status === 'loading') {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color='#888' />
      </View>
    );
  }

  if (prod.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No products found. Maybe start adding some!</Text>
        <ButtonComponent title='Reload' onPress={loadProducts} />
      </View>
    );
  }
  return (
    <FlatList
      data={prod}
      renderItem={({ item }) => (
        <ProductItem product={item} onPress={handleViewDetail.bind(null, item)}>
          <ButtonComponent
            title='View details'
            onPress={handleViewDetail.bind(null, item)}
          />
          <ButtonComponent
            title='Add to cart'
            onPress={handleAddToCart.bind(null, item)}
          />
        </ProductItem>
      )}
      onRefresh={loadProducts}
      refreshing={status !== 'idle'}
    />
  );
}
