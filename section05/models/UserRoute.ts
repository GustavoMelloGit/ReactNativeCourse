import Product from './product';

type RootUserRouteParamList = {
  allProducts: undefined;
  editProduct: { product?: Product };
};

export default RootUserRouteParamList;
