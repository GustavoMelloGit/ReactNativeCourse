import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  deleteButton: {},
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: theme.fonts.primary,
    color: '#888',
    fontSize: 16,
  },
  title: {
    fontFamily: theme.fonts.primaryBold,
    fontSize: 16,
  },
  amount: {
    fontFamily: theme.fonts.primary,
    fontSize: 16,
    marginRight: 10,
  },
  priceWrapper: {
    flexDirection: 'row',
  },
});

export default styles;
