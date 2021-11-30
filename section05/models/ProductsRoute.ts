import Product from './product';

export type RootStackParamList = {
  Products: undefined;
  ProductDetail: { product: Product };
  Cart: undefined;
};
