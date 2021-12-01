import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from '../../../components/OrderItem';
import { RootState } from '../../../store';

export default function OrdersScreen() {
  const orders = useSelector((state: RootState) => state.order.orders);

  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderItem order={item} />}
      contentContainerStyle={{ paddingBottom: 30 }}
    />
  );
}
