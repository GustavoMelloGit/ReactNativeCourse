import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import LoadingSpinner from '../../../components/LoadingSpinner';
import OrderItem from '../../../components/OrderItem';
import { useTypedSelector } from '../../../store';
import { fetchOrders } from '../../../store/orders';

type Props = DrawerScreenProps<RootDrawerParamList, 'OrdersDrawer'>;

export default function OrdersScreen(props: Props) {
  const { navigation } = props;
  const orders = useTypedSelector((state) => state.order.orders);
  const status = useTypedSelector((state) => state.order.status);
  const dispatch = useDispatch();

  function fetchData() {
    dispatch(fetchOrders({}));
  }

  useEffect(() => {
    const listener = navigation.addListener('focus', fetchData);
    return listener;
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

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
      onRefresh={fetchData}
      refreshing={status !== 'idle'}
    />
  );
}
