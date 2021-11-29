import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import ProductsOverviewScreen from './screens/shop/ProductsOverview';
import store from './store';

export default function App() {
  return <ProductsOverviewScreen />;
}
