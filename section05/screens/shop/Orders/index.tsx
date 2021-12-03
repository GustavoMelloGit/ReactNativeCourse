import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from '../../../components/OrderItem';
import { RootState } from '../../../store';
import { fetchOrders } from '../../../store/orders';

export default function OrdersScreen() {
  const orders = useSelector((state: RootState) => state.order.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchOrders());
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  if (orders.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No orders found</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderItem order={item} />}
      contentContainerStyle={{ paddingBottom: 30 }}
    />
  );
}
