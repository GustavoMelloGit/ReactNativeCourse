import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IEditProduct, IProductsReducer } from '../models/store';
import Product from '../models/product';

const initialState: IProductsReducer = {
  availableProducts: [],
  userProducts: [],
};

export const addProductIntoServer = createAsyncThunk(
  'products/addProductIntoServer',
  async (product: Product, thunkAPI) => {
    try {
      const response = await fetch(
        'https://reactnativecourse-f629a-default-rtdb.firebaseio.com/products.json',
        {
          method: 'POST',
          body: JSON.stringify(product),
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchProductsFromServer = createAsyncThunk(
  'products/fetchProductsFromServer',
  async (data, thunkAPI) => {
    try {
      const response = await fetch(
        'https://reactnativecourse-f629a-default-rtdb.firebaseio.com/products.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const resData = await response.json();
      const loadedProducts = [];
      for (const key in resData) {
        loadedProducts.push(
          new Product(
            key,
            resData[key].ownerId,
            resData[key].title,
            resData[key].imageUrl,
            resData[key].description,
            resData[key].price
          )
        );
      }
      return loadedProducts;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      const productId: string = action.payload;
      state.userProducts = state.userProducts.filter(
        (prod) => prod.id !== productId
      );
      state.availableProducts = state.availableProducts.filter(
        (prod) => prod.id !== productId
      );
    },
    addProduct: (state, action) => {
      const { title, imageUrl, description, price } = action.payload;

      const newProduct: Product = new Product(
        Math.random().toString(),
        'u1',
        title,
        imageUrl,
        description,
        price
      );

      state.availableProducts.push(newProduct);
      state.userProducts.push(newProduct);
    },
    editProduct: (state, action) => {
      const { title, description, imageUrl, price, id }: IEditProduct =
        action.payload;

      const updatedUserProduct = state.userProducts.findIndex(
        (prod) => prod.id === id
      );
      const updatedAvailableProduct = state.availableProducts.findIndex(
        (prod) => prod.id === id
      );
      const updatedProduct: Product = new Product(
        id,
        'u1',
        title,
        imageUrl,
        description,
        +price
      );
      const userProducts = [...state.userProducts];
      const availableProducts = [...state.availableProducts];
      userProducts[updatedUserProduct] = updatedProduct;
      availableProducts[updatedAvailableProduct] = updatedProduct;
      state.userProducts = userProducts;
      state.availableProducts = availableProducts;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProductIntoServer.fulfilled, (state, action) => {
      // const product: Product = action.payload;
      // state.availableProducts.push(product);
      // state.userProducts.push(product);
    });
    builder.addCase(fetchProductsFromServer.fulfilled, (state, action) => {
      if (action.payload) {
        const products: Product[] = action.payload;
        state.availableProducts = products;
        state.userProducts = products.filter((prod) => prod.ownerId === 'u1');
      }
    });
  },
});
export const { deleteProduct, addProduct, editProduct } = productsSlice.actions;
export default productsSlice.reducer;
