import React from 'react';
import { View, Text, Button } from 'react-native';
import { IOrder } from '../../models/store';
import Card from '../ui/Card';
import styles from './styles';
import moment from 'moment';
import CartItem from '../CartItem';

type Props = {
  order: IOrder;
};

export default function OrderItem({ order }: Props): JSX.Element {
  const [showDetails, setShowDetails] = React.useState(false);
  const { date } = order;
  const formattedDate = moment(date).format('MMMM Do YYYY, hh:mm');

  const handleShowState = () => {
    setShowDetails((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Card>
          <View style={styles.card__inner}>
            <View style={styles.summary}>
              <Text style={styles.price}>
                ${order.cartOrder.totalAmount.toFixed(2)}
              </Text>
              <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <Button
              title={showDetails ? 'Hide details' : 'Show details'}
              onPress={handleShowState}
            />
          </View>
          {showDetails && (
            <View>
              {order.cartOrder.items.map((item) => (
                <CartItem
                  product={item.product}
                  quantity={item.quantity}
                  onRemoveItem={() => {}}
                  key={item.product.id}
                  showRemoveButton={false}
                />
              ))}
            </View>
          )}
        </Card>
      </View>
    </View>
  );
}
