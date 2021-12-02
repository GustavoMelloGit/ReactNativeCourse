import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../../components/ProductItem/ProductItem';
import ButtonComponent from '../../../components/ui/Button';
import Product from '../../../models/product';
import RootUserRouteParamList from '../../../models/UserRoute';
import { RootState } from '../../../store';
import { deleteProductFromCart } from '../../../store/cart';
import {
  deleteProduct,
  fetchProductsFromServer,
} from '../../../store/products';
import { Ionicons } from '@expo/vector-icons';

type Props = StackScreenProps<RootUserRouteParamList, 'allProducts'>;

export default function UserProductsScreen({ navigation }: Props): JSX.Element {
  const dispatch = useDispatch();
  const userProducts = useSelector(
    (state: RootState) => state.products.userProducts
  );

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
    dispatch(deleteProduct(product.id));
    dispatch(deleteProductFromCart(product));
  };

  const handleEditProduct = (product: Product) => {
    navigation.navigate('editProduct', { product });
  };

  const handleAddProduct = () => {
    navigation.navigate('editProduct', {});
  };

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
