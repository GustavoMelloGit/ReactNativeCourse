import Product from './product';

interface IProductsReducer {
  availableProducts: Product[];
  userProducts: Product[];
}

interface ICartReducer {
  items: {
    quantity: number;
    product: Product;
  }[];
  totalAmount: number;
}

export { IProductsReducer, ICartReducer };
