import { Dispatch } from 'redux';
import { RootState } from '../store';
import Product from './product';

interface IProductsReducer {
  availableProducts: Product[];
  userProducts: Product[];
  status: 'idle' | 'loading';
  error: string | null;
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

interface IEditProduct {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  id: string;
}

export {
  IProductsReducer,
  ICartReducer,
  ICartProduct,
  IOrder,
  IOrderReducer,
  IEditProduct,
};
