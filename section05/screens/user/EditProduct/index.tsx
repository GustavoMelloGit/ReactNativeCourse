import { StackScreenProps } from '@react-navigation/stack';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import ButtonComponent from '../../../components/ui/Button';
import TextInputComponent from '../../../components/ui/TextInput';
import Product from '../../../models/product';
import RootUserRouteParamList from '../../../models/UserRoute';
import { addProduct, editProduct } from '../../../store/products';
import { styles } from './styles';

type Props = StackScreenProps<RootUserRouteParamList, 'editProduct'>;
export default function EditProductScreen(props: Props): JSX.Element {
  const { navigation, route } = props;
  const { product } = route.params;
  const dispatch = useDispatch();
  const [title, setTitle] = useState(product ? product.title : '');
  const [description, setDescription] = useState(
    product ? product.description : ''
  );
  const [price, setPrice] = useState(product ? product.price.toString() : '');
  const [image, setImage] = useState(product ? product.imageUrl : '');

  if (product) {
    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: product.title,
      });
    }, []);
  }

  const handleSubmit = (): void => {
    if (product) {
      dispatch(
        editProduct({
          title,
          description,
          image,
          price,
          id: product.id,
        })
      );
      navigation.goBack();
    } else {
      const priceNumber = Number(price);
      dispatch(
        addProduct({ title, description, price: priceNumber, imageUrl: image })
      );
      navigation.goBack();
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInputComponent
          label='Title'
          value={title}
          onChangeText={setTitle}
        />
        <TextInputComponent
          label='Image URL'
          keyboardType='url'
          value={image}
          onChangeText={setImage}
        />
        <TextInputComponent
          label='Price'
          keyboardType='numeric'
          value={price}
          onChangeText={setPrice}
        />
        <TextInputComponent
          label='Description'
          value={description}
          onChangeText={setDescription}
        />
        <ButtonComponent
          title={product ? 'Save' : 'Add'}
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
}
