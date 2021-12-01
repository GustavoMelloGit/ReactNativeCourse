import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../../components/ProductItem/ProductItem';
import ButtonComponent from '../../../components/ui/Button';
import Product from '../../../models/product';
import { RootState } from '../../../store';
import { deleteProductFromCart, removeFromCart } from '../../../store/cart';
import { deleteProduct } from '../../../store/products';

export default function UserProductsScreen(): JSX.Element {
  const dispatch = useDispatch();

  const userProduts = useSelector(
    (state: RootState) => state.products.userProducts
  );

  const handleRemoveProduct = (product: Product) => {
    dispatch(deleteProduct(product.id));
    dispatch(deleteProductFromCart(product));
  };

  return (
    <FlatList
      data={userProduts}
      renderItem={({ item }) => (
        <ProductItem product={item} onPress={() => {}}>
          <ButtonComponent title='Edit' onPress={() => {}} />
          <ButtonComponent
            title='Remove'
            onPress={handleRemoveProduct.bind(null, item)}
          />
        </ProductItem>
      )}
    />
  );
}
