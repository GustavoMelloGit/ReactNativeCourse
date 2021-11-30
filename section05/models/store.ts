import Product from './product';

interface IProductsReducer {
  availableProducts: Product[];
  userProducts: Product[];
}

interface ICartProduct {
  product: Product;
  quantity: number;
}
interface ICartReducer {
  items: ICartProduct[];
  totalAmount: number;
}

interface IOrder {
  id: string;
  cartOrder: ICartReducer;
  date: Date;
}

interface IOrderReducer {
  orders: IOrder[];
}
export { IProductsReducer, ICartReducer, ICartProduct, IOrder, IOrderReducer };
