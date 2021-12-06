import React, { useCallback, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../store';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { RootStackParamList } from '../../../models/ProductsRoute';
import { StackScreenProps } from '@react-navigation/stack';
import Product from '../../../models/product';
import { addToCart } from '../../../store/cart';
import CartHeaderButton from '../../../components/ui/CartHeaderButton';
import ButtonComponent from '../../../components/ui/Button';
import { fetchProductsFromServer } from '../../../store/products';
import { styles } from './styles';
import LoadingSpinner from '../../../components/LoadingSpinner';

type Props = StackScreenProps<RootStackParamList, 'ProductDetail'>;

export default function ProductsOverviewScreen(props: Props): JSX.Element {
  const { navigation } = props;
  const productList = useTypedSelector(
    (state) => state.products.availableProducts
  );
  const status = useTypedSelector((state) => state.products.status);
  const dispatch = useDispatch();

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
    return <LoadingSpinner />;
  }

  if (productList.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No products found. Maybe start adding some!</Text>
        <ButtonComponent title='Reload' onPress={loadProducts} />
      </View>
    );
  }
  return (
    <FlatList
      data={productList}
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
