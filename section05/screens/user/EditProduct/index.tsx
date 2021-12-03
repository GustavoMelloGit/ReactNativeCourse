import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useLayoutEffect, useReducer } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import ButtonComponent from '../../../components/ui/Button';
import TextInputComponent from '../../../components/ui/TextInput';
import Product from '../../../models/product';
import RootUserRouteParamList from '../../../models/UserRoute';
import {
  addProductIntoServer,
  editProductInServer,
  fetchProductsFromServer,
} from '../../../store/products';
import { styles } from './styles';

type Props = StackScreenProps<RootUserRouteParamList, 'editProduct'>;

const formReducer = (state: any, action: any) => {
  if (action.type === 'FORM_INPUT_UPDATE') {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.payload,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let formIsValid = true;

    for (const key in updatedValidities) {
      formIsValid = formIsValid && updatedValidities[key];
    }

    return {
      formIsValid,
      inputValues: updatedValues,
      inputValidities: updatedValidities,
    };
  }
  return state;
};

export default function EditProductScreen(props: Props): JSX.Element {
  const { navigation, route } = props;
  const { product } = route.params;
  const dispatch = useDispatch();

  const [formState, setFormState] = useReducer(formReducer, {
    inputValues: {
      title: product ? product.title : '',
      description: product ? product.description : '',
      price: product ? product.price.toString() : '',
      imageUrl: product ? product.imageUrl : '',
    },
    inputValidities: {
      title: product ? true : false,
      description: product ? true : false,
      price: product ? true : false,
      imageUrl: product ? true : false,
    },
    formIsValid: false,
  });

  if (product) {
    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: product.title,
      });
    }, []);
  }

  const textChangeHandler = (inputIdentifier: string, text: string) => {
    let isValid = true;
    if (text.trim().length === 0) {
      isValid = false;
    }
    setFormState({
      type: 'FORM_INPUT_UPDATE',
      payload: text,
      isValid,
      input: inputIdentifier,
    });
  };
  const handleSubmit = useCallback((): void => {
    if (!formState.formIsValid) {
      Alert.alert('Wrong input', 'Please check the errors in the form.', [
        { text: 'Okay' },
      ]);
      return;
    }
    if (product) {
      dispatch(
        editProductInServer({
          title: formState.inputValues.title,
          description: formState.inputValues.description,
          imageUrl: formState.inputValues.imageUrl,
          price: parseFloat(formState.inputValues.price),
          id: product.id,
        })
      );
      navigation.goBack();
    } else {
      const priceNumber = Number(formState.inputValues.price);
      const product = {
        title: formState.inputValues.title,
        description: formState.inputValues.description,
        price: priceNumber,
        imageUrl: formState.inputValues.imageUrl,
      };
      dispatch(addProductIntoServer(product));
      navigation.goBack();
    }
  }, [dispatch, formState.inputValues]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInputComponent
          label='Title'
          value={formState.inputValues.title}
          onChangeText={textChangeHandler.bind(null, 'title')}
        />
        <TextInputComponent
          label='Image URL'
          keyboardType='url'
          value={formState.inputValues.imageUrl}
          onChangeText={textChangeHandler.bind(null, 'imageUrl')}
        />
        <TextInputComponent
          label='Price'
          keyboardType='numeric'
          value={formState.inputValues.price}
          onChangeText={textChangeHandler.bind(null, 'price')}
        />
        <TextInputComponent
          label='Description'
          value={formState.inputValues.description}
          onChangeText={textChangeHandler.bind(null, 'description')}
        />
        <ButtonComponent
          title={product ? 'Save' : 'Add'}
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
}
