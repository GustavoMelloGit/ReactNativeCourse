import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../../components/ProductItem/ProductItem';
import ButtonComponent from '../../../components/ui/Button';
import Product from '../../../models/product';
import RootUserRouteParamList from '../../../models/UserRoute';
import { RootState } from '../../../store';
import { deleteProductFromCart } from '../../../store/cart';
import {
  deleteProductFromServer,
  fetchProductsFromServer,
} from '../../../store/products';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import LoadingSpinner from '../../../components/LoadingSpinner';

type Props = StackScreenProps<RootUserRouteParamList, 'allProducts'>;

export default function UserProductsScreen({ navigation }: Props): JSX.Element {
  const dispatch = useDispatch();
  const userProducts = useSelector(
    (state: RootState) => state.products.userProducts
  );
  const status = useSelector((state: RootState) => state.products.status);

  const loadProducts = useCallback(async () => {
    dispatch(fetchProductsFromServer({}));
  }, [dispatch]);

  useEffect(() => {
    const listener = navigation.addListener('focus', loadProducts);
    return listener;
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: (headerConfig) => (
        <Ionicons
          name='add'
          size={24}
          color={headerConfig.tintColor}
          onPress={handleAddProduct}
          style={{ marginRight: 10 }}
        />
      ),
    });
  }, [dispatch, navigation, fetchProductsFromServer]);

  const handleRemoveProduct = (product: Product) => {
    dispatch(deleteProductFromServer(product.id));
    dispatch(deleteProductFromCart(product));
  };

  const handleEditProduct = (product: Product) => {
    navigation.navigate('editProduct', { product });
  };

  const handleAddProduct = () => {
    navigation.navigate('editProduct', {});
  };

  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (userProducts.length === 0) {
    return (
      <View style={styles.centered}>
        <Ionicons name='ios-alert' size={64} color='#f00' />
        <Text>No products found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={userProducts}
      renderItem={({ item }) => (
        <ProductItem product={item} onPress={() => {}}>
          <ButtonComponent
            title='Edit'
            onPress={handleEditProduct.bind(null, item)}
          />
          <ButtonComponent
            title='Remove'
            onPress={handleRemoveProduct.bind(null, item)}
          />
        </ProductItem>
      )}
    />
  );
}
